import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    console.log(email);
    const user = await this.userService.findUserByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Senha ou email inválidos');
    }

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...userRetorno } = user;
      return userRetorno;
    }
    return null;
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: await this.jwtService.sign(payload),
    };
  }

  async register(createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
