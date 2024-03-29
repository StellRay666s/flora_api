"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication = __importStar(require("@feathersjs/authentication"));
const removeCartAfterCreateOrder_1 = require("./hooks/removeCartAfterCreateOrder");
const findOnlyUserOrders_1 = require("./hooks/findOnlyUserOrders");
const autoAddUserId_1 = require("./hooks/autoAddUserId");
const orderProductsPositionsToProducts_1 = require("./hooks/orderProductsPositionsToProducts");
const { authenticate } = authentication.hooks;
exports.default = {
    before: {
        all: [authenticate("jwt")],
        find: [
            async (ctx) => {
                ctx = await (0, findOnlyUserOrders_1.findOnlyUserOrders)(ctx);
                return ctx;
            },
        ],
        get: [],
        create: [
            async (ctx) => {
                ctx = await (0, autoAddUserId_1.autoAddUserId)(ctx);
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
            async (ctx) => {
                await (0, orderProductsPositionsToProducts_1.orderProductsPositionsToProducts)(ctx);
                return ctx;
            },
        ],
        get: [],
        create: [
            async (ctx) => {
                ctx = await (0, removeCartAfterCreateOrder_1.removeCartAfterCreateOrder)(ctx);
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
