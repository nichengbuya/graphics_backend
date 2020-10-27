import { Module } from '@nestjs/common';

import { DeviceModule } from './module/device/device.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    DeviceModule
  ],
})
export class AppModule {}
