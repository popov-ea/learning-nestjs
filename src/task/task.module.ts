import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";
import { DummyTaskRepository } from "./dummy-task.repository";
import { TASK_REPOSITORY } from "./interfaces/task-repository.interface";
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';

//@Global() for global scope 
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
export class TaskModule implements NestModule {
    //can inject
    constructor(private TaskService: TaskService) {}
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware)
              .forRoutes("tasks");
    }
}