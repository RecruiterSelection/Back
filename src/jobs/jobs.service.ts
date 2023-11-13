import { HttpException, Injectable } from '@nestjs/common';
import { Job } from './jobs.entity';

@Injectable()
export class JobsService {
  private jobs: Job[] = [];

  findAll() {
    return this.jobs;
  }

  findOne(id: number) {
    const job = this.jobs.find((jobs) => jobs.id == id);
    if (!job) {
      throw new HttpException(`${id} not foud`, 404);
    }

    return job;
  }

  create(createJobDTO: any) {
    const generateId = () => {
      if (this.jobs.length == 0) {
        return 1;
      }

      const id = this.jobs.reduce((maior, objetoAtual) => {
        return objetoAtual.id > maior.id ? objetoAtual : maior;
      }, this.jobs[0]);

      return id.id + 1;
    };

    const newData = {
      id: generateId(),
      ...createJobDTO,
    };

    this.jobs.push(newData);

    return newData;
  }

  update(id: number, updateJobDTO: any) {
    const existJob = this.findOne(id);

    if (!existJob) {
      throw new HttpException(`job id ${id} not foud`, 404);
    }

    const index = this.jobs.findIndex((job) => job.id == id);

    const newData = (this.jobs[index] = {
      ...this.jobs[index],
      ...updateJobDTO,
    });

    return newData;
  }

  remove(id: number) {
    const index = this.jobs.findIndex((job) => job.id == id);
    const job = this.jobs[index];

    if (!job) {
      throw new HttpException(`job id ${id} not foud`, 404);
    }

    this.jobs.splice(index, 1);
    return;
  }
}
