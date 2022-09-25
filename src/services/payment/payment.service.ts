import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { Payment } from "./payment.class";
import createModel from "../../models/payment.model";
import hooks from "./payment.hooks";

declare module "../../declarations" {
  interface ServiceTypes {
    payment: Payment & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  app.use("/payment", new Payment(options, app));

  const service = app.service("payment");

  service.hooks(hooks);
}
