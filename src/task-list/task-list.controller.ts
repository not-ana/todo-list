import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskListService } from './task-list.service';
import { Prisma } from '@prisma/client';



@Controller('task-list')
export class TaskListController {
  constructor(private readonly taskListService: TaskListService) {}

  //SOBRE TASKS

  @Get('tasks') // GET /task-list/tasks
  findAllTasks() { 
    return this.taskListService.findAllTasks();
  }

  @Get('tasks/:id')  // GET /task-list/tasks/:id
  findOneTask(@Param('id') id: string) {
    return this.taskListService.findOne(+id);
  }



  //SOBRE TASK LISTS

  @Post() // POST /task-list
  create(@Body() createTaskListDto: Prisma.TaskListCreateInput) {
      return this.taskListService.create(createTaskListDto);
  }


  @Get() // GET /task-list
  findAllTaskLists() {
    return this.taskListService.findAllTaskLists();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskListDto: Prisma.TaskListUpdateInput) {
    return this.taskListService.update(+id, updateTaskListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskListService.remove(+id);
  }


}
