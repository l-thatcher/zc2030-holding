import {execute_query} from "../../../utils/db";
import {updateCalculatorInputs} from "../../../services/CalculatorService";
import {createCalculator} from "../../../services/PrismaService";

const getCalculatorTypes = `SELECT * FROM CalculatorType`;

const saveCalculatorType = ` INSERT INTO CalculatorType(name, public)
                             VALUES (?, 0)`;

const saveCalculatorInput = ` INSERT INTO CalculatorInput(category_id, name, factor, unit)
                              VALUES (?, ?, ?, ?)`;

const updateCalculatorType = ` UPDATE CalculatorType
                               SET name   = ?,
                                   public = ?
                               WHERE id = ?`;

const getLastId = `SELECT LAST_INSERT_ID()`;

export default async function handler(req, res) {
  switch (req.method) {
    // Get data from database
    case "GET":
      try {
        const result = await execute_query(getCalculatorTypes);
        res.status(200).json(result);
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
      break;

    // Create data from database
    case "POST":

            const namePost = req.body[0];
            const publicPost = req.body[1];
            console.log("!!!!!!")
            console.log(req.body[0])
            console.log(req.body[1])

            try {
                const result = await createCalculator(namePost, publicPost)
                const json = JSON.stringify(result, (key, value) =>
                    typeof value === "bigint" ? parseInt(value) : value
                );
                res.status(200).json(json);
            } catch (e) {
                console.log(e)
                res.status(500).json({message: e.message});
            }

            break;

    // Delete data from database
    case "DELETE":
      break;

    // Update data from database
    case "PUT":

            const typeIdPut = req.body[0];
            const namePut = req.body[1];
            const publicPut = req.body[2];

            try {
                const result = await execute_query(
                    updateCalculatorType, [
                        namePut,
                        publicPut,
                        typeIdPut,

                    ]);
                res.status(200).json(result);
            } catch (e) {
                res.status(500).json({message: e.message});
            }

            break;
    }
}
