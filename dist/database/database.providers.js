"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
exports.databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => await mongoose.connect('mongodb://localhost/nest'),
    },
];
//# sourceMappingURL=database.providers.js.map