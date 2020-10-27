"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleGuardService = void 0;
const common_1 = require("@nestjs/common");
let RoleGuardService = class RoleGuardService {
    fetch(id) {
        return `Hello World! ${id}`;
    }
    save(message) {
        return `Set Hello Done.${message}`;
    }
    update(id, message) {
        return `Update Hello Done. ${id}：${message}`;
    }
    remove(id) {
        return `${id} Record Was Removed.`;
    }
};
RoleGuardService = __decorate([
    common_1.Injectable()
], RoleGuardService);
exports.RoleGuardService = RoleGuardService;
//# sourceMappingURL=role-guard.service.js.map