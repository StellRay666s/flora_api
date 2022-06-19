"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOnlyUserCart = void 0;
async function findOnlyUserCart(ctx) {
    ctx.params.query.userId = ctx.params.user._id;
    return ctx;
}
exports.findOnlyUserCart = findOnlyUserCart;
