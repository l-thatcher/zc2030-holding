import { execute_query } from "../../../../utils/db";

const getCalculatorCategoriesByTypeId = `SELECT CalculatorType.id, CalculatorCategory.id, CalculatorCategory.name FROM CalculatorCategory 
                                         JOIN CalculatorType ON CalculatorType.id = CalculatorCategory.type_id 
                                         WHERE CalculatorType.id = ?`;

const saveCalculatorCategory = ` INSERT INTO CalculatorCategory(type_id, name)
                                   VALUES (?, ?)`;

const updateCalculatorCategory = ` UPDATE CalculatorCategory
                                     SET type_id = ?, name = ?
                                     WHERE id = ?`;

const deleteCalculatorCategory = `DELETE FROM CalculatorCategory
                                  WHERE id = ?`;

export default async function handler(req, res) {
  const { typeId } = req.query;

  switch (req.method) {

    // Get data from database
    case "GET":
      try {
        const result = await execute_query(
          getCalculatorCategoriesByTypeId,
          typeId
        );
        res.status(200).json(result);
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
      break;

    // Create data from database
    case "POST":

      const typeIdPost = req.body[0];
      const namePost = req.body[1];

      try {
        const result = await execute_query(
            saveCalculatorCategory,[
            typeIdPost,
            namePost
        ]);
        res.status(200).json(result);
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
      break;

    // Delete data from database
    case "DELETE":

      const categoryIdDelete = req.body[1];

      try {
        const result = await execute_query(
            deleteCalculatorCategory,categoryIdDelete
            );
        res.status(200).json(result);
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
      break;

    // Update data from database
    case "PUT":

      const typeIdPut = req.body[0];
      const namePut = req.body[1];
      const categoryIdPut = req.body[2];

      try {
        const result = await execute_query(
            updateCalculatorCategory, [
            typeIdPut,
            namePut,
            categoryIdPut
      ]);
        res.status(200).json(result);
      } catch (e) {
        res.status(500).json({ message: e.message });
      }

      break;
  }
}
