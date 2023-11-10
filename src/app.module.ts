import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { JobsController } from './jobs/jobs.controller';
import { UsersService } from './users/users.service';
import { JobsService } from './jobs/jobs.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, JobsController],
  providers: [AppService, UsersService, JobsService],
})
export class AppModule {}
