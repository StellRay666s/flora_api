import { HookContext } from "@feathersjs/feathers";

async function autoAddUserId(ctx: HookContext) {
  ctx.data.userId = ctx.params.user._id;
  return ctx;
}

export { autoAddUserId };
