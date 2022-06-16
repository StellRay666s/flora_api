// Initializes the `bouquets` service on path `/bouquets`
import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { Bouquets } from "./bouquets.class";
import createModel from "../../models/bouquets.model";
import hooks from "./bouquets.hooks";

// Add this service to the service type index
declare module "../../declarations" {
  interface ServiceTypes {
    bouquets: Bouquets & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/bouquets", new Bouquets(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("bouquets");

  service.hooks(hooks);
}
