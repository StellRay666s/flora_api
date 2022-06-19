"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    const modelName = "users";
    const mongooseClient = app.get("mongooseClient");
    const schema = new mongooseClient.Schema({
        email: { type: String, unique: true, lowercase: true },
        password: { type: String },
        address: { type: String },
        phone: { type: String },
        name: { type: String },
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
