"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const auth_service_1 = require("../auth/auth.service");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(userModel, authService) {
        this.userModel = userModel;
        this.authService = authService;
    }
    async create(createUserDto) {
        const user = new this.userModel(createUserDto);
        await this.isNameUnique(user.name);
        await user.save();
        return {
            user: user.name
        };
    }
    async isNameUnique(name) {
        const user = await this.userModel.findOne({ name: name });
        if (user) {
            throw new common_1.BadRequestException('name has exist');
        }
    }
    async login(loginDto) {
        const user = await this.userModel.findOne({ name: loginDto.name });
        const match = await bcrypt.compare(loginDto.password, user.password);
        if (!user || !match) {
            throw new common_1.BadRequestException('name or password not right');
        }
        return {
            name: user.name,
            accessToken: await this.authService.createAccessToken(user._id)
        };
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('user')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        auth_service_1.AuthService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map