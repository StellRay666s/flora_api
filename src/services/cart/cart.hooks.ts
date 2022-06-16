import { HookContext, HooksObject } from "@feathersjs/feathers";
import * as authentication from "@feathersjs/authentication";

import { cartPositionsToProducts } from "./hooks/cartPositionsToProducts";

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
        const newCtx = cartPositionsToProducts(ctx);
        return newCtx;
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
