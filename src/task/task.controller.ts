import { Controller, Get, Post, Param, UseFilters, Body, BadRequestException, Delete } from "@nestjs/common";
import { FriendlyException } from "src/exceptions/friendly.exception";
import { FriendlyExceptionFilter } from "src/filters/friendly-exception.filter";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskCreationResultDto } from "./dto/task-creation-result.dto";
import { TaskDto } from "./dto/task.dto";
import UpdateTaskDto from "./dto/update-task.dto";
import { TaskService } from "./task.service";

@Controller("tasks")
@UseFilters(FriendlyExceptionFilter)
export class TaskController {
    constructor(private taskService: TaskService) {

    }

    @Get()
    getAll(): TaskDto[] {
        return this.taskService.getAll();
    } 

    @Get(":taskId")
    get(@Param("taskId")taskId: number): TaskDto {
        //throw new FriendlyException("just throwing exception here to check for handling in friendly-exception.filter.ts");
        return this.taskService.get(taskId);
    }

    @Post()
    create(@Body()createTaskDto: CreateTaskDto): TaskCreationResultDto {
        return this.taskService.create(createTaskDto);
    }

    @Post()
    update(@Body()updateTaskDto: UpdateTaskDto): TaskDto {
        if (updateTaskDto.id == null || updateTaskDto.id <= 0) {
            throw new BadRequestException(`Incorrect id: ${updateTaskDto.id}`);
        }
        return this.taskService.update(updateTaskDto);
    }

    @Delete(":taskId")
    delete(@Param("taskId")taskId: number) {
        if (taskId == null || taskId <= 0) {
            throw new BadRequestException(`Incorrect id: ${taskId}`);
        }
        return this.taskService.delete(taskId);
    }
}