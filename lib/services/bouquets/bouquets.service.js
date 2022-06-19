"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bouquets_class_1 = require("./bouquets.class");
const bouquets_model_1 = __importDefault(require("../../models/bouquets.model"));
const bouquets_hooks_1 = __importDefault(require("./bouquets.hooks"));
function default_1(app) {
    const options = {
        Model: (0, bouquets_model_1.default)(app),
        paginate: app.get("paginate"),
    };
    // Initialize our service with any options it requires
    app.use("/bouquets", new bouquets_class_1.Bouquets(options, app));
    // Get our initialized service so that we can register hooks
    const service = app.service("bouquets");
    service.hooks(bouquets_hooks_1.default);
}
exports.default = default_1;
