"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    const modelName = "orders";
    const mongooseClient = app.get("mongooseClient");
    const { Schema } = mongooseClient;
    const schema = new Schema({
        date: { type: String, required: true },
        address: { type: String, required: true },
        paymentMethod: { type: String, required: true },
        products: { type: [{ count: Number, id: String }], required: true },
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
