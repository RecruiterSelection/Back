import { Injectable } from '@nestjs/common';
import { Job } from './jobs.entity';

@Injectable()
export class JobsService {
  private jobs: Job[] = [];

  findAll() {
    return this.jobs;
  }

  findOne(id: number) {
    return this.jobs.find((jobs) => jobs.id == id);
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

    if (existJob) {
      const index = this.jobs.findIndex((job) => job.id == id);

      const newData = (this.jobs[index] = {
        id,
        ...updateJobDTO,
      });
      return newData;
    }
  }

  remove(id: number) {
    const index = this.jobs.findIndex((job) => job.id == id);

    this.jobs.splice(index, 1);
    return;
  }
}
