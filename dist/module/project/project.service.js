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
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProjectService = class ProjectService {
    constructor(projectModel) {
        this.projectModel = projectModel;
    }
    async getAllProject() {
        return await this.projectModel.find().exec();
    }
    async createProject(msg) {
        await this.isNameUnique(msg.name);
        const project = new this.projectModel(msg);
        await project.save();
        return project;
    }
    async isNameUnique(name) {
        const project = await this.projectModel.findOne({ name: name });
        if (project) {
            throw new common_1.BadRequestException('name has exits');
        }
    }
    async deleteProject(msg) {
        await this.projectModel.deleteOne({ id: msg.id });
        return 'ok';
    }
    async updateProject(msg) {
        return 'a';
    }
};
ProjectService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('project')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map