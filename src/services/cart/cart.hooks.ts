import { HookContext, HooksObject } from "@feathersjs/feathers";
import * as authentication from "@feathersjs/authentication";

import { cartPositionsToProducts } from "./hooks/cartPositionsToProducts";
import { findOnlyUserCart } from "./hooks/findOnlyUserCart";
import { autoAddUserId } from "./hooks/autoAddUserId";

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [authenticate("jwt")],
    find: [
      async (ctx: HookContext) => {
        const newCtx = await findOnlyUserCart(ctx);
        return newCtx;
      },
    ],
    get: [],
    create: [
      async (ctx: HookContext) => {
        const newCtx = await autoAddUserId(ctx);
        return newCtx;
      },
    ],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [
      async (ctx: HookContext) => {
        const newCtx = await cartPositionsToProducts(ctx);
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
