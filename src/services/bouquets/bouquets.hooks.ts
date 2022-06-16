import { HookContext, HooksObject } from "@feathersjs/feathers";

import { addIsNew } from "./hooks/addIsNew";
import { addBonuses } from "./hooks/addBonuses";

export default {
  before: {
    all: [],
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
        const newCtx = await addIsNew(ctx);
        return newCtx;
      },
    ],
    get: [
      async (ctx: HookContext) => {
        const newCtx = await addBonuses(ctx);
        return newCtx;
      },
    ],
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
