import FakeTurmasRepository from '../repositories/fakes/FakeTurmasRepository';
import ListTurmasService from './ListTurmasService';

let fakeTurmasRepository: FakeTurmasRepository;
let listTurmas: ListTurmasService;

describe('ListTurmas', () => {
  beforeEach(() => {
    fakeTurmasRepository = new FakeTurmasRepository();
    listTurmas = new ListTurmasService(
      fakeTurmasRepository,
    );
  });
  it('Ser possível a listagem das turmas.', async () => {
    const turma1 = await fakeTurmasRepository.create({
      name: 'Escola Brasileira',
      escola_id: '123456789'
    });
    const turma2 = await fakeTurmasRepository.create({
      name: 'Escola Brasileira2',
      escola_id: '123789456'
    });
    const turma3 = await fakeTurmasRepository.create({
      name: 'Escola Brasileira3',
      escola_id: '789123456'
    });

    const turmas = await listTurmas.execute();

    expect(turmas).toEqual([turma1, turma2, turma3]);
  });


});
