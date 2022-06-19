"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartPositionsToProducts = void 0;
async function cartPositionsToProducts(ctx) {
    const newData = await ctx.result.data.map(async (resultItem) => {
        const product = await ctx.app.service("bouquets").get(resultItem.productId);
        return { product, _id: resultItem._id, count: resultItem.count };
    });
    await Promise.all(newData).then(data => {
        ctx.result.data = data;
        return ctx;
    });
}
exports.cartPositionsToProducts = cartPositionsToProducts;
