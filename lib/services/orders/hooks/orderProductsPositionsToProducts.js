"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderProductsPositionsToProducts = void 0;
async function orderProductsPositionsToProducts(ctx) {
    let orders = ctx.result.data.map(async (order) => {
        let newOrder;
        let newProducts = order.products.map(async (product) => {
            const newProduct = await ctx.app.service("bouquets").get(product._id);
            return {
                ...product,
                product: newProduct,
            };
        });
        await Promise.all(newProducts).then(data => {
            newOrder = {
                ...order,
                products: data,
            };
            return ctx;
        });
        return newOrder;
    });
    await Promise.all(orders).then(data => {
        ctx.result.data = data;
        return ctx;
    });
}
exports.orderProductsPositionsToProducts = orderProductsPositionsToProducts;
