import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ServiceModule } from './service/service.module';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TaskModule, DatabaseModule, UserModule, AuthModule, ServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
