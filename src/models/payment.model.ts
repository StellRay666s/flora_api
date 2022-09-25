import { Application } from "../declarations";
import { Model, Mongoose } from "mongoose";

export default function (app: Application): Model<any> {
  const modelName = "payment";
  const mongooseClient: Mongoose = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      orderId: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );

  if (mongooseClient.modelNames().includes(modelName)) {
    (mongooseClient as any).deleteModel(modelName);
  }
  return mongooseClient.model<any>(modelName, schema);
}
