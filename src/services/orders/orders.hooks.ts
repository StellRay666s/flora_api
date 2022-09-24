import { HookContext, HooksObject } from "@feathersjs/feathers";
import * as authentication from "@feathersjs/authentication";

import { removeCartAfterCreateOrder } from "./hooks/removeCartAfterCreateOrder";
import { findOnlyUserOrders } from "./hooks/findOnlyUserOrders";
import { autoAddUserId } from "./hooks/autoAddUserId";
import { orderProductsPositionsToProducts } from "./hooks/orderProductsPositionsToProducts";

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [authenticate("jwt")],
    find: [
      async (ctx: HookContext) => {
        ctx = await findOnlyUserOrders(ctx);
        return ctx;
      },
    ],
    get: [],
    create: [
      async (ctx: HookContext) => {
        ctx = await autoAddUserId(ctx);
        return ctx;
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
        await orderProductsPositionsToProducts(ctx);
        return ctx;
      },
    ],
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
