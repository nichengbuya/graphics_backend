import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsGateway } from './common/gateway/event.gateway';

import { DeviceModule } from './module/device/device.module';
import { ProjectModule } from './module/project/project.module';
import { UserModule } from './module/user/user.module';
import { ConfigModule } from 'nestjs-config';
import { resolve } from 'path';

@Module({
  imports: [
    ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    DeviceModule,
    UserModule,
    ProjectModule,
    EventsGateway
  ],
})
export class AppModule {}
