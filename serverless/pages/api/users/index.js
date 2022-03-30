import { execute_query } from "../../../utils/db";
import {getSession} from "next-auth/react";

const getAllUserData = `SELECT * FROM USER`;

// const handler = async (_, res) => {
//     try {
//         const result = await sql_query(getAllUserData);
//
//         return res.json(result);
//     } catch (e) {
//         console.log(res);
//         res.status(500).json({message: e.message});
//     }
// };

export default async function handler(req, res) {
  // const apiSession = await getSession({ req });
  // console.log(apiSession)
  // if ((apiSession?.user?.role === "ADMIN")) {
  switch (req.method) {
    // Get data from database
    case "GET":
      try {
        const result = await execute_query(getAllUserData);
        res.status(200).json(result);
      } catch (e) {
        console.log(e)
        res.status(500).json({ message: e.message });
      }
      break;

    // Create data from database
    case "POST":
      break;

    // Delete data from database
    case "DELETE":
      break;

    // Update data from database
    case "PUT":
      break;
  }
  // } else {
  //   // Not Signed in
  //   res.status(401)
  // }
  // res.end()
}