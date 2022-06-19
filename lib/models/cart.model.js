"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    const modelName = "cart";
    const mongooseClient = app.get("mongooseClient");
    const { Schema } = mongooseClient;
    const schema = new Schema({
        productId: { type: String, required: true },
        userId: { type: String, required: false },
        count: { type: Number, required: true },
    }, {
        timestamps: true,
    });
    // This is necessary to avoid model compilation errors in watch mode
    // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
    if (mongooseClient.modelNames().includes(modelName)) {
        mongooseClient.deleteModel(modelName);
    }
    return mongooseClient.model(modelName, schema);
}
exports.default = default_1;
