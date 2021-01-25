import AppError from '@shared/errors/AppError';
import FakeTurmasRepository from '../repositories/fakes/FakeTurmasRepository';
import CreateTurmaService from './CreateTurmaService';

let fakeTurmasRepository: FakeTurmasRepository;
let createTurma: CreateTurmaService;

describe('CreateTurma', () => {
  beforeEach(() => {
    fakeTurmasRepository = new FakeTurmasRepository();
    createTurma = new CreateTurmaService(
      fakeTurmasRepository,
    );
  });
  it('Ser possível a criação de uma turma.', async () => {
    const turma = await createTurma.execute({
      name: 'Turma Brasileira',
      escola_id: '12345678'
    });

    expect(turma).toHaveProperty('id');
  });

  it('Não ser possível a criação de uma turma com nome vazio', async () => {
    await expect(
      createTurma.execute({
        name: '',
        escola_id: '12345678',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Não ser possível a criação de uma turma com escola vazia', async () => {
    await expect(
      createTurma.execute({
        name: '',
        escola_id: '12345678',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
