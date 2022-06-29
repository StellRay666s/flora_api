"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autoAddUserId = void 0;
async function autoAddUserId(ctx) {
    ctx.data.userId = ctx.params.user._id;
    return ctx;
}
exports.autoAddUserId = autoAddUserId;
