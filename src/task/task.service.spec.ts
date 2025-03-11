import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Task, TaskStatus } from './entities/task.entity';
import { Repository } from 'typeorm';

const mockTaskRepository = () => ({
  find: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
  remove: jest.fn(),
});

describe('TaskService', () => {
  let service: TaskService;
  let repository: Repository<Task>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaskService,
        { provide: getRepositoryToken(Task), useFactory: mockTaskRepository },
      ],
    }).compile();

    service = module.get<TaskService>(TaskService);
    repository = module.get<Repository<Task>>(getRepositoryToken(Task));
  });

  it('deve criar uma nova tarefa', async () => {
    const taskDto = {
      title: 'Nova Tarefa',
      activityDate: '2025-03-12T20:00:00.000Z',
    };

    repository.create = jest.fn().mockReturnValue(taskDto);
    repository.save = jest.fn().mockResolvedValue(taskDto);

    const result = await service.create(taskDto as any);
    expect(result).toEqual(taskDto);
    expect(repository.save).toHaveBeenCalledWith(taskDto);
  });

  it('deve encontrar todas as tarefas', async () => {
    const tasks = [new Task(), new Task()];
    repository.find = jest.fn().mockResolvedValue(tasks);

    expect(await service.findAll()).toEqual(tasks);
  });
});
