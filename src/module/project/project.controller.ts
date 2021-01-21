import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './project.interface';
@Controller('project')
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
    async getObjectById(@Body() msg) {
        return await this.projectService.getObjectById(msg);
    }
}
