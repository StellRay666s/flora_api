"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const payment_class_1 = require("./payment.class");
const payment_model_1 = __importDefault(require("../../models/payment.model"));
const payment_hooks_1 = __importDefault(require("./payment.hooks"));
function default_1(app) {
    const options = {
        Model: (0, payment_model_1.default)(app),
        paginate: app.get("paginate"),
    };
    app.use("/payment", new payment_class_1.Payment(options, app));
    const service = app.service("payment");
    service.hooks(payment_hooks_1.default);
}
exports.default = default_1;
