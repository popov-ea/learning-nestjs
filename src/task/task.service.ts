import { Injectable, Inject } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskCreationResultDto } from "./dto/task-creation-result.dto";
import { TaskDto } from "./dto/task.dto";
import { Task } from "./interfaces/task.interface";
import { TaskRepository, TASK_REPOSITORY } from "./interfaces/task-repository.interface";
import { title } from "process";

@Injectable()
export class TaskService {
    /**
     * Implements basic operations with tasks
     */
    constructor(@Inject(TASK_REPOSITORY) private taskRepository: TaskRepository) {
                
    }

    create(createDto: CreateTaskDto) : Promise<TaskCreationResultDto> {
        return Promise.resolve(this.taskRepository.add({
            id: null,
            title: createDto.title,
            plannedFinishDate: createDto.plannedFinishDate,
            description: createDto.description,
            startDate: null,
            finishDate: null
        })).then((task) => ({
            success: true,
            task: task
        }));
    }

    get(taskId: number) : Promise<TaskDto> {
        if (taskId == null || taskId <= 0) {
            throw new Error(`Wrong task id: ${taskId}`)
        }
        return Promise.resolve(this.taskRepository.queryFirst(t => t.id === taskId) as TaskDto);
    }    
}