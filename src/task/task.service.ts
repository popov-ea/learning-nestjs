import { Injectable, Inject } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskCreationResultDto } from "./dto/task-creation-result.dto";
import { TaskDto } from "./dto/task.dto";
import { Task } from "./interfaces/task.interface";
import { TaskRepository, TASK_REPOSITORY } from "./interfaces/task-repository.interface";
import UpdateTaskDto from "./dto/update-task.dto";

@Injectable()
export class TaskService {
    /**
     * Implements basic operations with tasks
     */
    constructor(@Inject(TASK_REPOSITORY) private taskRepository: TaskRepository) {
                
    }

    createAsync(createDto: CreateTaskDto) : Promise<TaskCreationResultDto> {
        return this.taskRepository.addAsync({
            id: null,
            title: createDto.title,
            plannedFinishDate: createDto.plannedFinishDate,
            description: createDto.description,
            startDate: null,
            finishDate: null
        }).then((task) => ({
            success: true,
            task: task as TaskDto
        }));
    }

    create(createDto: CreateTaskDto): TaskCreationResultDto {
        if (createDto.title != null && createDto.plannedFinishDate != null && createDto.description != null) {
            throw new Error("Incorrect data");
        }
        const added = this.taskRepository.add({
            id: null,
            title: createDto.title,
            plannedFinishDate: createDto.plannedFinishDate,
            description: createDto.description,
            startDate: null,
            finishDate: null
        });
        return {
            success: true,
            task: added as TaskDto
        };
    }

    async getAsync(taskId: number) : Promise<TaskDto> {
        if (taskId == null || taskId <= 0) {
            throw new Error(`Wrong task id: ${taskId}`)
        }
        return this.taskRepository.queryFirstAsync(t => t.id === taskId)
            .then((task) => task as TaskDto);
    }

    get(taskId): TaskDto {
        if (taskId == null || taskId <= 0) {
            throw new Error(`Wrong task id: ${taskId}`)
        }
        return this.taskRepository.queryFirst(t => t.id == taskId);
    }
    
    getAll(): TaskDto[] {
        return this.taskRepository.getAll().map(t => t as TaskDto);
    }
    
    async getAllAsync(): Promise<TaskDto[]> {
        return this.taskRepository.getAllAsync().then((tasks) => tasks.map((t) => t as TaskDto));
    }

    update(updateTaskDto: UpdateTaskDto): TaskDto {
        if (updateTaskDto.id == null || updateTaskDto.id <= 0) {
            throw new Error(`Incorrect task id: ${updateTaskDto.id}`);
        }
        const task = this.taskRepository.queryFirst(t => t.id === updateTaskDto.id);
        task.description = updateTaskDto.description;
        task.title = updateTaskDto.title;
        task.plannedFinishDate = updateTaskDto.plannedFinishDate;
        this.taskRepository.update(task);
        return task as TaskDto;
    }

    async updateAsync(updateTaskDto: UpdateTaskDto): Promise<TaskDto> {
        if (updateTaskDto.id == null || updateTaskDto.id <= 0) {
            throw new Error(`Incorrect task id ${updateTaskDto.id}`);
        }
        return this.taskRepository.queryFirstAsync(t => t.id === updateTaskDto.id)
            .then((t) => {
                t.title = updateTaskDto.title;
                t.description = updateTaskDto.description;
                t.plannedFinishDate = updateTaskDto.plannedFinishDate;
                this.taskRepository.update(t);
                return t as TaskDto;
            });
    }

    delete(taskId: number): TaskDto {
        if (taskId == null || taskId <= 0) {
            throw new Error(`Incorrect task id ${taskId}`);
        }
        const task = this.taskRepository.get(taskId);
        this.taskRepository.remove(task);
        return task as TaskDto;
    }

    async deleteAsync(taskId: number): Promise<TaskDto> {
        if (taskId == null || taskId <= 0) {
            throw new Error(`Incorrect task id ${taskId}`);
        }
        const task = this.taskRepository.get(taskId);
        return this.taskRepository.removeAsync(task)
            .then(() => task as TaskDto);
    }
}