import { HookContext } from "@feathersjs/feathers";

async function removeCartAfterCreateOrder(ctx: HookContext) {
  const cart = await ctx.app.service("cart").find({ query: { userId: ctx.params.user._id } });
  cart.data.map(async cartItem => {
    await ctx.app.service("cart").remove(cartItem._id);
  });
  return ctx;
}

export { removeCartAfterCreateOrder };
