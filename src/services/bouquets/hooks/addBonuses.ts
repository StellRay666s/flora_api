import { HookContext } from "@feathersjs/feathers";

async function addBonuses(ctx: HookContext) {
  ctx.result = {
    ...ctx.result,
    bonuses: ctx.result.price / 10,
  };
  return ctx;
}

export { addBonuses };
