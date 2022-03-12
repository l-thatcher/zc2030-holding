import styles from "../styles/Calculator.module.css";
import {
  getCalculatorCategories,
  getCalculatorInputs,
  getCalculatorTypes, getCalculatorTypesForUser, getPublicCalculatorTypes,
  getUserCategoryProgress,
} from "../services/CalculatorService";
import ListOfCalculators from "../Components/calculators/ListOfCalculators";
import { getSession, useSession } from "next-auth/react";

const background3 = "/calculator_background_3.jpg";

export default function Calculator(props) {
  const types = props.types;
  const categories = props.categories;
  const inputs = props.inputs;
  const categoriesCount = props.categoriesCount;
  const { data: session } = useSession();
  let userId = null;
  if (session) {
    userId = session.user.id;
  }

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${background3})` }}
    >
      <h1 className={styles.h1} data-testid="main_heading">
        Carbon Calculators
      </h1>
      <div className="container-md">
        <ListOfCalculators
          categories={categories}
          categoriesCount={categoriesCount}
          types={types}
          inputs={[inputs]}
          userId={userId}
        />
      </div>
    </div>
  );
}

// This gets called at build time
export async function getServerSideProps(context) {
  let categories = [];
  let categoriesCount = [];
  let inputs = [];
  let typeId = [];
  let categoryId = [];
  const session = await getSession(context);
  let userId = null;
  let typesRes = null;
  if (session) {
    userId = session.user.id;
    typesRes = await getCalculatorTypesForUser(userId)
  } else {
    typesRes = await getPublicCalculatorTypes();
  }

  // Adds all Calculator types in a list
  const types = typesRes.data;

  // Adds the IDs of calculators in a list
  types.map((type) => {
    typeId.push(type.id);
  });

  // Add Calculator Categories into categories for every id of calculators
  for (let i = 0; i < typeId.length; i++) {
    const res = await getCalculatorCategories(typeId[i]);
    const calculatorCategories = res.data;
    if (userId != null) {
      // categoriesCount.push(await calculatorCategories.map(it => getUserCategoryProgress(userId, it.id)))
      // categoriesCount.push((await getUserCategoryProgress("cl0h963z10006rwqni8sc891f", 1)).data.count)
      const temp = [];
      for (let j = 0; j < calculatorCategories.length; j++) {
        temp.push(
          (await getUserCategoryProgress(userId, calculatorCategories[j].id))
            .data.count
        );
      }
      categoriesCount.push(temp);
    }
    categories.push(calculatorCategories);
  }

  // Add Calculator Inputs for each calculator type
  for (let i = 0; i < typeId.length; i++) {
    for (let b = 0; b < categories[i].length; b++) {
      categoryId = categories[i][b].id;
      const res = await getCalculatorInputs(typeId[i], categoryId);
      inputs.push(res.data);
    }
  }

  // Pass post data to the page via props
  return { props: { types, categories, inputs, categoriesCount } };
}
