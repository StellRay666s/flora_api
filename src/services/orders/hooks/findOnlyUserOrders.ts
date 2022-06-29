import { HookContext } from "@feathersjs/feathers";

async function findOnlyUserOrders(ctx: HookContext): Promise<HookContext> {
  if (ctx?.params?.user?._id) {
    ctx.params.query.userId = ctx.params.user._id;
  }
  return ctx;
}

export { findOnlyUserOrders };
