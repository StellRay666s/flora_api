"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    const modelName = "payment";
    const mongooseClient = app.get("mongooseClient");
    const { Schema } = mongooseClient;
    const schema = new Schema({
        orderId: { type: String, required: true },
    }, {
        timestamps: true,
    });
    if (mongooseClient.modelNames().includes(modelName)) {
        mongooseClient.deleteModel(modelName);
    }
    return mongooseClient.model(modelName, schema);
}
exports.default = default_1;
