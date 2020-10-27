"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSchema = void 0;
const mongoose = require("mongoose");
exports.AuthSchema = new mongoose.Schema({
    username: String,
    id: String
});
//# sourceMappingURL=auth.schema.js.map