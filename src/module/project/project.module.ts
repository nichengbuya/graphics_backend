import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectController } from './project.controller';
import { ObjectSchema, ProjectSchema } from './project.schema';
import { ProjectService } from './project.service';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigService } from 'nestjs-config';
@Module({
  imports: [
    MongooseModule.forFeature([{name:'project',schema:ProjectSchema},{name:'object',schema:ObjectSchema}]),
    MulterModule.registerAsync({
      useFactory:(config:ConfigService)=> config.get('file'),
      inject:[ConfigService]
    })
  ],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
