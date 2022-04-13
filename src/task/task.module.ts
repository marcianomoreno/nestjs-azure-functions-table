import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { AzureTableStorageModule } from '@nestjs/azure-database';
import { Task } from './entities/task.entity';

@Module({
  imports: [
    AzureTableStorageModule.forFeature(Task, {
      table: 'tasks',
      createTableIfNotExists: true,
    }),
  ],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
