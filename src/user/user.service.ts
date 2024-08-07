import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

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

  /*
  async createUser(createUserDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({data: createUserDto})
  }
  
 
  
  async createUser(name: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.databaseService.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  }
  */

  async createUser(data: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.databaseService.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return await this.databaseService.user.findUnique({
      where: { email },
    });
  }

  async findAll() {
    return this.databaseService.user.findMany();
  }

  async findOne(id: number) {
    return await this.databaseService.user.findUnique({ where: { id } });
  }

  async findOneByEmail(email: string) {
    return await this.databaseService.user.findUnique({ where: { email } });
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.user.delete({ where: { id } });
  }
}

/*
import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private prisma: DatabaseService) {}

  async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async createUser(name: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  }
}
*/

/*
// user.service.ts
import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private prisma: DatabaseService) {}

  async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async createUser(name: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  }
}
*/
