import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TaskService {
  @Inject()
  private readonly databaseService: DatabaseService;

  async findAll(userId: number) {
    return await this.databaseService.task.findMany({ where: { userId } });
  }

  async findOne(id: number) {
    if (!id) {
      throw new Error('Task ID is required');
    }
    const result = await this.databaseService.task.findUnique({
      where: { id },
    });
    if (!result) {
      throw new NotFoundException('Task not found');
    }
    return result;
  }

  async create(createTaskDto: Prisma.TaskCreateInput, userId: number) {
    const newTask = {
      description: createTaskDto.description,
      isCompleted: createTaskDto.isCompleted,
      user: { connect: { id: userId } },
    };
    return await this.databaseService.task.create({ data: newTask });
  }

  async update(id: number, updateTaskDto: Prisma.TaskUpdateInput) {
    try {
      const result = await this.databaseService.task.update({
        where: { id },
        data: updateTaskDto,
      });
      return result;
    } catch (error) {
      throw new BadRequestException('Error updating task');
    }
  }

  async delete(id: number) {
    try {
      const result = await this.databaseService.task.delete({
        where: { id },
      });
      return { message: 'Task deleted successfully' };
    } catch (error) {
      throw new NotFoundException('Error deleting task');
    }
  }
}
