"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const feathers_mongoose_1 = require("feathers-mongoose");
class Payment extends feathers_mongoose_1.Service {
    constructor(options, app) {
        super(options);
    }
}
exports.Payment = Payment;
