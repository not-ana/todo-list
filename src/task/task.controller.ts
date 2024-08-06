import { Body, Controller, Delete, Get, Param, Patch, Post, Query, 
    ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TaskController {

    constructor(private readonly taskService: TaskService) {}


    @Get()  // GET /tasks 
    findAll() {
        return this.taskService.findAll();
    }


    @Get(':id')  // GET /tasks/:title
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.taskService.findOne(id);
    }

/*
    @Post() // POST /tasks
    create(@Body(ValidationPipe) createTaskDto: CreateTaskDto) {
        return this.taskService.create(createTaskDto)
    }
*/
    @Patch(':id') // PATCH /tasks/:id
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateTaskDto: UpdateTaskDto) {
        return this.taskService.update(id, updateTaskDto)
    }

    @Delete(':id') // DELETE /tasks/:id
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.taskService.delete(id);
    }

}
