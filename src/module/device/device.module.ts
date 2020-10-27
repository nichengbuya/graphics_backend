import { Module } from '@nestjs/common';
import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';
import { DatabaseModule } from 'src/database/database.module';
import { deviceProvider } from './device.provider';

@Module({
    imports: [DatabaseModule],
    controllers:[DeviceController],
    providers:[DeviceService,...deviceProvider]
})
export class DeviceModule {}
