"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
const bcrypt = require("bcrypt");
exports.UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    role: {
        type: [String],
        default: ['user']
    }
});
class User extends mongoose_1.Document {
}
exports.User = User;
exports.UserSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const hashed = await bcrypt.hash(this['password'], 10);
        this['password'] = hashed;
        return next();
    }
    catch (err) {
        return next(err);
    }
});
//# sourceMappingURL=user.schema.js.map