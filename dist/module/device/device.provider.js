"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceProvider = void 0;
const device_schema_1 = require("./device.schema");
exports.deviceProvider = [
    {
        provide: 'DeviceModelToken',
        useFactory: (connection) => connection.model('Device', device_schema_1.DeviceSchema),
        inject: ['DbConnectionToken'],
    }
];
//# sourceMappingURL=device.provider.js.map