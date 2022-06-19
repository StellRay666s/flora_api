"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addIsNew = void 0;
async function addIsNew(ctx) {
    ctx.result.data = ctx.result.data.map((resultItem) => {
        const msLimit = 43200000;
        return {
            isNew: new Date().getTime() - new Date(resultItem.createdAt).getTime() < msLimit,
            ...resultItem,
        };
    });
    return ctx;
}
exports.addIsNew = addIsNew;
