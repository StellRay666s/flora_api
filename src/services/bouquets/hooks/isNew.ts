import { HookContext } from "@feathersjs/feathers";

async function isNew(ctx: HookContext) {
  ctx.result.data = ctx.result.data.map((resultItem: any) => {
    const msLimit: number = 43200000;
    return {
      isNew: new Date().getTime() - new Date(resultItem.createdAt).getTime() < msLimit,
      ...resultItem,
    };
  });
  return ctx;
}

export { isNew };
