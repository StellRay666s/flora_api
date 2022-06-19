"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addIsNew_1 = require("./hooks/addIsNew");
const addBonuses_1 = require("./hooks/addBonuses");
exports.default = {
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
            async (ctx) => {
                const newCtx = await (0, addIsNew_1.addIsNew)(ctx);
                return newCtx;
            },
        ],
        get: [
            async (ctx) => {
                const newCtx = await (0, addBonuses_1.addBonuses)(ctx);
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
