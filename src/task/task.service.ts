import {
  AzureTableStorageResultList,
  InjectRepository,
  Repository,
} from '@nestjs/azure-database';
import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly tasksRepository: Repository<Task>,
  ) {}

  async getTasks(): Promise<AzureTableStorageResultList<Task>> {
    return this.tasksRepository.findAll();
  }

  async createTask(task: Task): Promise<Task> {
    return this.tasksRepository.create(task);
  }
}
