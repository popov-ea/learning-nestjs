import { Module } from '@nestjs/common';
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";
import { DummyTaskRepository } from "./dummy-task.repository";
import { TASK_REPOSITORY } from "./interfaces/task-repository.interface";

@Module({
    controllers: [TaskController],
    providers: [
        TaskService,
        {
            provide: TASK_REPOSITORY,
            useClass: DummyTaskRepository
        }
    ]
})
export class TaskModule {}