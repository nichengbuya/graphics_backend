"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceSchema = void 0;
const mongoose = require("mongoose");
exports.DeviceSchema = new mongoose.Schema({
    name: String,
    url: String,
    img: String,
    type: String,
    id: String
});
//# sourceMappingURL=device.schema.js.map