import { Module } from '@nestjs/common';

import { DeviceModule } from './module/device/device.module';

@Module({
  imports: [
    DeviceModule
  ],
})
export class AppModule {}
