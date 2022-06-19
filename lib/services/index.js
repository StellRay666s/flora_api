"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = __importDefault(require("./users/users.service"));
const bouquets_service_1 = __importDefault(require("./bouquets/bouquets.service"));
const cart_service_1 = __importDefault(require("./cart/cart.service"));
const orders_service_1 = __importDefault(require("./orders/orders.service"));
function default_1(app) {
    app.configure(users_service_1.default);
    app.configure(bouquets_service_1.default);
    app.configure(cart_service_1.default);
    app.configure(orders_service_1.default);
}
exports.default = default_1;
