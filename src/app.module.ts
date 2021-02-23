import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { LoggerMiddleware } from "./middlewares/logger.middleware";
import { FunctionMiddleware } from "./middlewares/function.middleware";

@Module({
  imports: [TaskModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FunctionMiddleware, LoggerMiddleware)
      .forRoutes("tasks");
  }
}
