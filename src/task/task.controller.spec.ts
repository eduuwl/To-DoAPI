import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './entities/task.entity';

const mockTaskService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('TaskController', () => {
  let controller: TaskController;
  let service: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [{ provide: TaskService, useValue: mockTaskService }],
    }).compile();

    controller = module.get<TaskController>(TaskController);
    service = module.get<TaskService>(TaskService);
  });

  it('deve criar uma tarefa', async () => {
    const dto: CreateTaskDto = {
      title: 'Nova tarefa',
      activityDate: '2025-03-12T20:00:00.000Z',
    };

    const createdTask = { id: '1', ...dto };

    mockTaskService.create.mockResolvedValue(createdTask);
    const result = await controller.create(dto);

    expect(result).toEqual(createdTask);
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('deve listar todas as tarefas', async () => {
    const tasks = [{}, {}];
    mockTaskService.findAll.mockResolvedValue(tasks);
    expect(await controller.findAll()).toBe(tasks);
  });

  it('deve buscar uma tarefa por ID', async () => {
    const task = { id: '1', title: 'Test' };
    mockTaskService.findOne.mockResolvedValue(task);

    expect(await controller.findOne('1')).toEqual(task);
  });

  it('deve atualizar uma tarefa pelo ID', async () => {
    const updatedTask = { id: '1', status: TaskStatus.DONE };
    mockTaskService.update.mockResolvedValue(updatedTask);

    expect(await controller.update('1', updatedTask)).toEqual(updatedTask);
  });

  it('deve remover uma tarefa pelo ID', async () => {
    mockTaskService.remove.mockResolvedValue({});

    await controller.remove('1');
    expect(service.remove).toHaveBeenCalledWith('1');
  });
});
