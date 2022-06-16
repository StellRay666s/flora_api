// Initializes the `cart` service on path `/cart`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Cart } from './cart.class';
import createModel from '../../models/cart.model';
import hooks from './cart.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'cart': Cart & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/cart', new Cart(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('cart');

  service.hooks(hooks);
}
