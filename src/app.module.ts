import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { JobsController } from './jobs/jobs.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, JobsController],
  providers: [AppService],
})
export class AppModule {}
