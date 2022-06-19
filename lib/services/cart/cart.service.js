"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cart_class_1 = require("./cart.class");
const cart_model_1 = __importDefault(require("../../models/cart.model"));
const cart_hooks_1 = __importDefault(require("./cart.hooks"));
function default_1(app) {
    const options = {
        Model: (0, cart_model_1.default)(app),
        paginate: app.get('paginate')
    };
    // Initialize our service with any options it requires
    app.use('/cart', new cart_class_1.Cart(options, app));
    // Get our initialized service so that we can register hooks
    const service = app.service('cart');
    service.hooks(cart_hooks_1.default);
}
exports.default = default_1;
