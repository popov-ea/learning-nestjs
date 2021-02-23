import { Controller, Get, Post, Param, UseFilters } from "@nestjs/common";
import { FriendlyException } from "src/exceptions/friendly.exception";
import { FriendlyExceptionFilter } from "src/filters/friendly-exception.filter";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskDto } from "./dto/task.dto";
import { TaskService } from "./task.service";

@Controller("tasks")
@UseFilters(FriendlyExceptionFilter)
export class TaskController {
    constructor(private taskService: TaskService) {

    }

    @Post()
    create(createTaskDto: CreateTaskDto): void {
        this.taskService.create(createTaskDto);
    }

    @Get(":taskId")
    async get(@Param("taskId")taskId: number): Promise<TaskDto> {
        //throw new FriendlyException("just throwing exception here to check for handling in friendly-exception.filter.ts");
        const task = await this.taskService.get(taskId);
        return {
            id: task.id,
            title: task.title,
            finishDate: task.finishDate,
            plannedFinishDate: task.plannedFinishDate,
            startDate: task.startDate,
            description: task.description
        }
    }
}