import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TaskController } from "./task.controller";
import { TaskService } from "../domain/task/task.service";
import { DummyTaskRepository } from "../repositories/dummy-task.repository";
import { TASK_REPOSITORY } from "../domain/task/interfaces/task-repository.interface";
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';
import { TypeormTaskRepository } from 'src/repositories/typeorm-task.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from 'src/type-orm-entities/task.entity';

//@Global() for global scope 
@Module({
    controllers: [TaskController],
    imports: [TypeOrmModule.forFeature([TaskEntity])],
    providers: [
        TaskService,
        {
            provide: TASK_REPOSITORY,
            useClass: TypeormTaskRepository
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