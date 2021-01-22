import { Body, Controller, Delete, Get, Post, Query, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './project.interface';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';

@Controller('project')
@UseGuards(AuthGuard('jwt'))
export class ProjectController {
    constructor(
        private readonly projectService: ProjectService
    ) { }
    @Get('getAllProject')
    getAllProject() {
        return this.projectService.getAllProject()
    }
    @Post('createProject')
    async createProject(@Body() msg) {
        return await this.projectService.createProject(msg)
    }
    @Post('updateProject')
    async updateProject(@Body() msg) {
        return await this.projectService.updateProject(msg)
    }
    @Delete('deleteProject')
    async deleteProject(@Body() msg) {
        return await this.projectService.deleteProject(msg)
    }
    @Get('getObjectById')
    async getObjectById(@Query() msg) {
        return await this.projectService.getObjectById(msg);
    }
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file){
        return await this.projectService.uploadFile(file);
    }
}
