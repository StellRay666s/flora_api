import { HookContext, HooksObject } from "@feathersjs/feathers";
import * as authentication from "@feathersjs/authentication";

import { removeCartAfterCreateOrder } from "./hooks/removeCartAfterCreateOrder";

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
    find: [],
    get: [],
    create: [
      async (ctx: HookContext) => {
        ctx = await removeCartAfterCreateOrder(ctx);
        return ctx;
      },
    ],
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
