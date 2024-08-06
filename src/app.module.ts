import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { DatabaseModule } from './database/database.module';
import { TaskListModule } from './task-list/task-list.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [TaskModule, DatabaseModule, TaskListModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
