"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectSchema = exports.ProjectSchema = void 0;
const mongoose = require("mongoose");
exports.ProjectSchema = new mongoose.Schema({
    name: String,
    id: String,
    isFavirate: Boolean,
    lastOpenTime: Date
});
exports.objectSchema = new mongoose.Schema({
    name: String,
    id: String,
    parent: String,
    matrix: Array,
    projectId: String
});
//# sourceMappingURL=project.schema.js.map