"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOnlyUserCart = void 0;
async function findOnlyUserCart(ctx) {
    var _a, _b;
    if ((_b = (_a = ctx === null || ctx === void 0 ? void 0 : ctx.params) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b._id) {
        console.log("ff");
        ctx.params.query.userId = ctx.params.user._id;
    }
    return ctx;
}
exports.findOnlyUserCart = findOnlyUserCart;
