import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';


@Injectable()
export class TaskService {
    constructor(private readonly databaseService: DatabaseService) {}
    
    /*
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
    */

    async findAll() {
        return this.databaseService.task.findMany()
    }

    /*
    findOne(title: string) {
        const task = this.tasks.find(task => task.title === title)

        return task
    }
    */

/*
    async findOne(id: number){
        const task = this.tasks.find(task => task.id === id)
        
        if (!task) throw new NotFoundException('Tarefa não encontrada')

        return task
    }
*/

    async findOne(id: number) {
    return this.databaseService.task.findUnique({where: {id}})
  }

    /*
    async create(createTaskDto: Prisma.TaskCreateInput) {
        const tasksByHightestId = [...this.tasks].sort((a,b) => b.id = a.id)
        const newTask = {
            id: tasksByHightestId[0].id + 1,
            ...createTaskDto
        }
        this.tasks.push(newTask)
        return newTask
    }

  */  

    async create(createTaskDto: Prisma.TaskCreateInput) {
        return this.databaseService.task.create({
          data: createTaskDto
        })
    }

/*
    async update(id: number, updateTaskDto: UpdateTaskDto) {
        this.tasks = this.tasks.map(task => {
            if (task.id === id){
                return { ...task, ...updateTaskDto }
            }
            return task
        })

        return this.findOne(id)
    }

*/
    async update(id: number, updateTaskDto: Prisma.TaskUpdateInput) {
        return this.databaseService.task.update({where: {id}, data: updateTaskDto})
      }
    
/*
    async delete(id: number) {
        const removedTask = this.findOne(id)

        this.tasks = this.tasks.filter(task => task.id !== id)

        return removedTask
    }
*/

    async delete(id: number) {
        return this.databaseService.task.delete({where: {id}})
    }
}
