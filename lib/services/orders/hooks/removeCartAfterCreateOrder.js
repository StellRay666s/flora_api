"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCartAfterCreateOrder = void 0;
async function removeCartAfterCreateOrder(ctx) {
    const cart = await ctx.app.service("cart").find({ query: { userId: ctx.params.user._id } });
    cart.data.map(async (cartItem) => {
        await ctx.app.service("cart").remove(cartItem._id);
    });
    return ctx;
}
exports.removeCartAfterCreateOrder = removeCartAfterCreateOrder;
