import { Module } from '@nestjs/common';
import { TaskListService } from './task-list.service';
import { TaskListController } from './task-list.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TaskListController],
  providers: [TaskListService],
})
export class TaskListModule {}
