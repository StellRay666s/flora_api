import { HookContext, HooksObject } from "@feathersjs/feathers";
import * as authentication from "@feathersjs/authentication";
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [authenticate("jwt")],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [
      async (ctx: HookContext) => {
        const newData = await ctx.result.data.map(async resultItem => {
          const product = await ctx.app.service("bouquets").get(resultItem.productId);
          return { product, _id: resultItem._id, count: resultItem.count };
        });
        await Promise.all(newData).then(data => {
          ctx.result.data = data;
          return ctx;
        });
      },
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
