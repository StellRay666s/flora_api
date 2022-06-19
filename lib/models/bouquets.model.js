"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    const modelName = "bouquets";
    const mongooseClient = app.get("mongooseClient");
    const { Schema } = mongooseClient;
    const schema = new Schema({
        title: { type: String, required: true },
        image: { type: String, required: true },
        subTitle: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        width: { type: Number, required: true },
        height: { type: Number, required: true },
        rating: { type: Number, required: true },
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
