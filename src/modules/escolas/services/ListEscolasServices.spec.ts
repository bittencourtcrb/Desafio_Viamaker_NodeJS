import FakeEscolasRepository from '../repositories/fakes/FakeEscolasRepository';
import ListEscolasService from './ListEscolasServices';
import { cnpj as CNPJ } from 'cpf-cnpj-validator';

let fakeEscolasRepository: FakeEscolasRepository;
let listEscolas: ListEscolasService;

describe('ListEscolas', () => {
  beforeEach(() => {
    fakeEscolasRepository = new FakeEscolasRepository();
    listEscolas = new ListEscolasService(
      fakeEscolasRepository,
    );
  });
  it('Ser possível a listagem das escolas.', async () => {
    const escola1 = await fakeEscolasRepository.create({
      name: 'Escola Brasileira',
      cnpj: CNPJ.generate()
    });
    const escola2 = await fakeEscolasRepository.create({
      name: 'Escola Brasileira2',
      cnpj: CNPJ.generate()
    });
    const escola3 = await fakeEscolasRepository.create({
      name: 'Escola Brasileira3',
      cnpj: CNPJ.generate()
    });

    const escolas = await listEscolas.execute();

    expect(escolas).toEqual([escola1, escola2, escola3]);
  });


});
