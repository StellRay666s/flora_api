import { HookContext } from "@feathersjs/feathers";

async function cartPositionsToProducts(ctx: HookContext) {
  const newData = await ctx.result.data.map(async resultItem => {
    const product = await ctx.app.service("bouquets").get(resultItem.productId);
    return { product, _id: resultItem._id, count: resultItem.count };
  });
  await Promise.all(newData).then(data => {
    ctx.result.data = data;
    return ctx;
  });
}

export { cartPositionsToProducts };
