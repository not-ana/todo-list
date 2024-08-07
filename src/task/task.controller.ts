import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe,
  UseGuards,
  Request,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Prisma } from '@prisma/client';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post() // POST /tasks
  create(@Body() createTaskDto: Prisma.TaskCreateInput, @Request() req: any) {
    return this.taskService.create(createTaskDto, +req.sub.sub);
  }

  @Get() // GET /tasks
  findAll(@Request() req: any) {
    return this.taskService.findAll(+req.sub.sub);
  }

  @Get(':id') // GET /tasks/:title
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.findOne(id);
  }

  @Patch(':id') // PATCH /tasks/:id
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateTaskDto: Prisma.TaskUpdateInput,
  ) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id') // DELETE /tasks/:id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.delete(id);
  }
}
