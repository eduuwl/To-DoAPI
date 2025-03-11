import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>
    ) {}

    create(createTaskDto: CreateTaskDto) {
        const task = this.taskRepository.create({
            ...createTaskDto,
            activityDate: new Date(createTaskDto.activityDate),
        });
        return this.taskRepository.save(task);  
    }

    findAll(): Promise<Task[]> {
        return this.taskRepository.find();
    }

    async findOne(id: string): Promise<Task> {
        const task = await this.taskRepository.findOne({where: {id}});

        if (!task) throw new NotFoundException('Task não encontrada');
        return task;
    }

    async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
        const task = await this.findOne(id);
        Object.assign(task, updateTaskDto);

        if (updateTaskDto.activityDate) {
            task.activityDate = new Date(updateTaskDto.activityDate);
        }
        return this.taskRepository.save(task);
    }
    
    async remove(id: string): Promise<void> {
        const task = await this.findOne(id);
        await this.taskRepository.remove(task);
    }
}