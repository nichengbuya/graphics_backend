"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleGuardModule = void 0;
const common_1 = require("@nestjs/common");
const role_guard_controller_1 = require("./role-guard.controller");
const role_guard_service_1 = require("./role-guard.service");
let RoleGuardModule = class RoleGuardModule {
};
RoleGuardModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [role_guard_controller_1.RoleGuardController],
        providers: [role_guard_service_1.RoleGuardService],
    })
], RoleGuardModule);
exports.RoleGuardModule = RoleGuardModule;
//# sourceMappingURL=role-guard.module.js.map