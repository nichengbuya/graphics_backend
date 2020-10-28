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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const fs = require("fs");
const path = require("path");
let DeviceService = class DeviceService {
    constructor(deviceModel) {
        this.deviceModel = deviceModel;
        this.initDeviceList();
    }
    getDeviceType() {
        let result = [
            {
                id: 1,
                value: 'robot',
            },
            {
                id: 2,
                value: 'gripper',
            },
            {
                id: 3,
                value: 'geometry',
            }
        ];
        return result;
    }
    async initDeviceList() {
        const fileName = path.join(__dirname, '../../data', 'device.json');
        const fileContent = fs.readFileSync(fileName);
        if (fileContent) {
            const json = JSON.parse(fileContent);
            const devices = await this.deviceModel.find().exec();
            json.forEach(async (d) => {
                const devices = await this.deviceModel.find({ name: d.name }).exec();
                if (devices.length === 0) {
                    const createDevice = new this.deviceModel(d);
                    await createDevice.save();
                }
            });
        }
    }
    async getDeviceList(type) {
        return await this.deviceModel.find({ type: type }).exec();
    }
};
DeviceService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('DeviceModelToken')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], DeviceService);
exports.DeviceService = DeviceService;
//# sourceMappingURL=device.service.js.map