import {
  Body,
  Controller,
  Get,
  Post,
  UnprocessableEntityException,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getTasks() {
    return await this.taskService.getTasks();
  }
  @Post()
  async createTask(
    @Body()
    createTaskDto: CreateTaskDto,
  ) {
    try {
      const task = new Task();
      Object.assign(task, createTaskDto);
      return await this.taskService.createTask(task);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}
