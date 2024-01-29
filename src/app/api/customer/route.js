import { getAllCustomers } from "@/middleware";
import { createCustomer, getAllCustomers } from "../../../middleware";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getAllCustomers(req, res);
    case "POST":
      return await createCustomer(req, res);

    default:
      res.status(400).json({});
      break;
  }
}