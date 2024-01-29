import {
  getUniqueCustomer,
  updateUniqueCustomer,
  deleteUniqueCustomer,
} from "../../../middleware";

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "GET":
        return await getUniqueCustomer(req, res);

      case "PUT":
        return await updateUniqueCustomer(req, res);

      case "DELETE":
        return await deleteUniqueCustomer(req, res);

      default:
        res.sendStatus(400);
        break;
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    res.sendStatus(500);
  }
}
