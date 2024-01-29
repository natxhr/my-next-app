import { Schema, model, models } from "mongoose";

const CustomerSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    address: { type: String, required: false },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  { collection: "customers" }
);

export default models.CustomerSchema || model("CustomerSchema", CustomerSchema);
