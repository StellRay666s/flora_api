import { Application } from "../declarations";
import users from "./users/users.service";
import bouquets from "./bouquets/bouquets.service";
import cart from "./cart/cart.service";
import orders from "./orders/orders.service";

import payment from './payment/payment.service';

export default function (app: Application): void {
  app.configure(users);
  app.configure(bouquets);
  app.configure(cart);
  app.configure(orders);
  app.configure(payment);
}
