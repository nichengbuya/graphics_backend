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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const users_entity_1 = require("./users.entity");
let UsersService = class UsersService {
    constructor(usersRepository, connection) {
        this.usersRepository = usersRepository;
        this.connection = connection;
    }
    async findAll() {
        return await this.usersRepository.find({ relations: ['photos'] });
    }
    async create(user) {
        const { name } = user;
        const u = await typeorm_1.getRepository(users_entity_1.UsersEntity).findOne({ where: { name } });
        if (u) {
            throw new common_1.HttpException({
                message: 'Input data validation failed',
                error: 'name must be unique.',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
        return await this.usersRepository.save(user);
    }
    async createMany(users) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            users.forEach(async (user) => {
                await queryRunner.manager.getRepository(users_entity_1.UsersEntity).save(user);
            });
            await queryRunner.commitTransaction();
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
        }
        finally {
            await queryRunner.release();
        }
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(users_entity_1.UsersEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.Connection !== "undefined" && typeorm_1.Connection) === "function" ? _b : Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map