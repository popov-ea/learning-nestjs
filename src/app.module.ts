import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { getConnectionOptions } from 'typeorm';

@Module({
  imports: [
    TaskModule,
    TypeOrmModule.forRoot(/*{
      useFactory: async () => {
        return {... await getConnectionOptions(), autoLoadEntities: true}
      }
    }*/)
  ]
})
export class AppModule {

}
