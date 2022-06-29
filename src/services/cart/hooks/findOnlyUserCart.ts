import { HookContext } from "@feathersjs/feathers";

async function findOnlyUserCart(ctx: HookContext) {
  if (ctx?.params?.user?._id) {
    console.log("ff");
    ctx.params.query.userId = ctx.params.user._id;
  }
  return ctx;
}

export { findOnlyUserCart };
