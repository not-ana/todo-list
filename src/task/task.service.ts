import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class TaskService {
    private tasks = [
        {
            "id": 1,
            "description": "Integração com API",
            "isCompleted": true,
        },
        {
            "id": 2,
            "description": "Definição da linguagem para backend",
            "isCompleted": false,
        },
        {
            "id": 3,
            "description": "Definição da linguagem para frontend",
            "isCompleted": true,
        },
        {
            "id": 4,
            "description": "Definição do banco de dados",
            "isCompleted": false,
        }
    ]


    findAll() {
        return this.tasks
    }

    /*
    findOne(title: string) {
        const task = this.tasks.find(task => task.title === title)

        return task
    }
    */


    findOne(id: number){
        const task = this.tasks.find(task => task.id === id)
        
        if (!task) throw new NotFoundException('Tarefa não encontrada')

        return task
    }


/*
    create(createTaskDto: CreateTaskDto) {
        const tasksByHightestId = [...this.tasks].sort((a,b) => b.id = a.id)
        const newTask = {
            id: tasksByHightestId[0].id + 1,
            ...createTaskDto
        }
        this.tasks.push(newTask)
        return newTask
    }
*/
    
    update(id: number, updateTaskDto: UpdateTaskDto) {
        this.tasks = this.tasks.map(task => {
            if (task.id === id){
                return { ...task, ...updateTaskDto }
            }
            return task
        })

        return this.findOne(id)
    }
    

    delete(id: number) {
        const removedTask = this.findOne(id)

        this.tasks = this.tasks.filter(task => task.id !== id)

        return removedTask
    }
}
