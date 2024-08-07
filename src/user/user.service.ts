import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  /*
  private user = [
    {
        "id": 1,
        "name": "Lucas",
        "email": "lucas@gmail.com",
        "password": "123456",        
    },
    {
        "id": 2,
        "name": "Lara",
        "email": "lara@gmail.com",
        "password": "123456xaxaxa",
    },
    {
        "id": 3,
        "name": "Luan",
        "email": "luan@gmail.com",    
        "password": "vrgfbgfnlvbfd56",
    },
  ]
  */

  async create(createUserDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({data: createUserDto})
  }

  async findAll() {
    return this.databaseService.user.findMany() 
  }

  async findOne(id: number){
    return this.databaseService.user.findUnique({where: {id}})
}

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({where: {id}, data: updateUserDto})
  }

  async remove(id: number) {
    return this.databaseService.user.delete({where: {id}})
  }
}
