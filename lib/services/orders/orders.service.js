"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orders_class_1 = require("./orders.class");
const orders_model_1 = __importDefault(require("../../models/orders.model"));
const orders_hooks_1 = __importDefault(require("./orders.hooks"));
function default_1(app) {
    const options = {
        Model: (0, orders_model_1.default)(app),
        paginate: app.get("paginate"),
    };
    // Initialize our service with any options it requires
    app.use("/orders", new orders_class_1.Orders(options, app));
    // Get our initialized service so that we can register hooks
    const service = app.service("orders");
    service.hooks(orders_hooks_1.default);
}
exports.default = default_1;
