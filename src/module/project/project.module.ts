import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectController } from './project.controller';
import { ObjectSchema, ProjectSchema } from './project.schema';
import { ProjectService } from './project.service';

@Module({
  imports: [MongooseModule.forFeature([{name:'project',schema:ProjectSchema},{name:'object',schema:ObjectSchema}])],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
