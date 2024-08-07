import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { DatabaseModule } from './database/database.module';
import { TaskListModule } from './task-list/task-list.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ServiceModule } from './service/service.module';


@Module({
  imports: [TaskModule, DatabaseModule, TaskListModule, UserModule, AuthModule, ServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
