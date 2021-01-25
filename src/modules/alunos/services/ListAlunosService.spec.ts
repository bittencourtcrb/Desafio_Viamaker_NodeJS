import FakeTurmasRepository from '../repositories/fakes/FakeAlunosRepository';
import ListAlunosService from './ListAlunosService';

let fakeTurmasRepository: FakeTurmasRepository;
let listAlunos: ListAlunosService;

describe('ListAlunos', () => {
  beforeEach(() => {
    fakeTurmasRepository = new FakeTurmasRepository();
    listAlunos = new ListAlunosService(
      fakeTurmasRepository,
    );
  });
  it('Ser possível a listagem dos alunos.', async () => {
    const aluno1 = await fakeTurmasRepository.create({
      name: 'Escola Brasileira',
      turma_id: '123456789'
    });
    const aluno2 = await fakeTurmasRepository.create({
      name: 'Escola Brasileira2',
      turma_id: '123789456'
    });
    const aluno3 = await fakeTurmasRepository.create({
      name: 'Escola Brasileira3',
      turma_id: '789123456'
    });

    const alunos = await listAlunos.execute();

    expect(alunos).toEqual([aluno1, aluno2, aluno3]);
  });


});
