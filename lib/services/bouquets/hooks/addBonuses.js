"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBonuses = void 0;
async function addBonuses(ctx) {
    ctx.result = {
        ...ctx.result,
        bonuses: ctx.result.price / 10,
    };
    return ctx;
}
exports.addBonuses = addBonuses;
