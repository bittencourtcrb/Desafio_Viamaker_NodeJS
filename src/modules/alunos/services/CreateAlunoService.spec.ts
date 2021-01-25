import AppError from '@shared/errors/AppError';
import FakeTurmasRepository from '../repositories/fakes/FakeAlunosRepository';
import CreateAlunoService from './CreateAlunoService';

let fakeTurmasRepository: FakeTurmasRepository;
let createAluno: CreateAlunoService;

describe('CreateAluno', () => {
  beforeEach(() => {
    fakeTurmasRepository = new FakeTurmasRepository();
    createAluno = new CreateAlunoService(
      fakeTurmasRepository,
    );
  });
  it('Ser possível a criação de um aluno.', async () => {
    const turma = await createAluno.execute({
      name: 'Aluno dos Santos',
      turma_id: '12345678'
    });

    expect(turma).toHaveProperty('id');
  });

  it('Não ser possível a criação de um aluno com nome vazio', async () => {
    await expect(
      createAluno.execute({
        name: '',
        turma_id: '12345678',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Não ser possível a criação de um aluno com turma vazia', async () => {
    await expect(
      createAluno.execute({
        name: '',
        turma_id: '12345678',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
