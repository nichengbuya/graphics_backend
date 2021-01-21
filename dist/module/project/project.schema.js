"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSchema = exports.ProjectSchema = void 0;
const mongoose = require("mongoose");
exports.ProjectSchema = new mongoose.Schema({
    name: String,
    id: String,
    isFavirate: Boolean,
    objects: Array,
    applications: Array,
    lastOpenTime: Date
});
exports.ObjectSchema = new mongoose.Schema({
    name: String,
    id: String,
    parent: String,
    matrix: Array,
    projectId: String
});
//# sourceMappingURL=project.schema.js.map