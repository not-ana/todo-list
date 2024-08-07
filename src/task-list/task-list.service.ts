import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TaskListService {
  constructor(private readonly databaseService: DatabaseService) {}

  //SOBRE TASKS

  async createTask(createTaskDto: Prisma.TaskCreateInput) {
    return this.databaseService.task.create({data: createTaskDto})
  }

  async findAllTasks() {
    return this.databaseService.task.findMany()
  }

/*
  async findOneTask(id: number) {
    const task = await this.databaseService.task.findUnique({where: {id}})
    if (!task) throw new NotFoundException('Tarefa não encontrada')
    return task
  }    
*/



  //SOBRE TASK LISTS



  async create(createTaskListDto: Prisma.TaskListCreateInput) {
    return this.databaseService.taskList.create({
      data: createTaskListDto
    })
  }



  async findOne(id: number) {
    return this.databaseService.taskList.findUnique({where: {id}})
  }

  async findAllTaskLists() {
    return this.databaseService.taskList.findMany()
  }



  async update(id: number, updateTaskListDto: Prisma.TaskListUpdateInput) {
    return this.databaseService.taskList.update({where: {id}, data: updateTaskListDto})
  }

  async remove(id: number) {
    return this.databaseService.taskList.delete({where: {id}})
  }
}
