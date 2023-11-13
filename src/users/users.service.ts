import { HttpException, Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((users) => users.id == id);

    if (!user) {
      throw new HttpException(`not found`, 404);
    }

    return user;
  }

  create(createUserDTO: any) {
    const generateId = () => {
      if (this.users.length == 0) {
        return 1;
      }

      const id = this.users.reduce((maior, objetoAtual) => {
        return objetoAtual.id > maior.id ? objetoAtual : maior;
      }, this.users[0]);

      return id.id + 1;
    };

    const newData = {
      id: generateId(),
      ...createUserDTO,
    };

    this.users.push(newData);

    return newData;
  }

  update(id: number, updateUserDTO: any) {
    const existCourse = this.findOne(id);

    if (existCourse) {
      const index = this.users.findIndex((course) => course.id == id);

      const newData = (this.users[index] = {
        ...this.users[index],
        ...updateUserDTO,
      });
      return newData;
    }
  }

  remove(id: number) {
    const index = this.users.findIndex((user) => user.id == id);
    const user = this.users[index];

    if (!user) {
      throw new HttpException('not found', 404);
    }
    this.users.splice(index, 1);
    return;
  }
}
