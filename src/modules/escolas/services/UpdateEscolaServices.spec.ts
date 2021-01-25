import FakeEscolasRepository from '../repositories/fakes/FakeEscolasRepository';
import UpdateEscolaService from './UpdateEscolaServices';
import { cnpj as CNPJ } from 'cpf-cnpj-validator';
import AppError from '@shared/errors/AppError';

let fakeEscolasRepository: FakeEscolasRepository;
let updateEscola: UpdateEscolaService;

describe('UpdateEscola', () => {
  beforeEach(() => {
    fakeEscolasRepository = new FakeEscolasRepository();
    updateEscola = new UpdateEscolaService(
      fakeEscolasRepository,
    );
  });
  it('Ser possível atualizar uma escola.', async () => {
    const cnPJ = CNPJ.generate()
    const escola = await fakeEscolasRepository.create({
      name: 'Escola Brasileira',
      cnpj: cnPJ
    });
    const updatedEscola = await updateEscola.execute({
      name: 'Escola Americana',
      cnpj: cnPJ,
    });

    expect(updatedEscola.name).toBe('Escola Americana');
  });

  it('Não ser possível atualizar uma escola para um nome vazio.', async () => {
    const cnPJ = CNPJ.generate()
    const escola = await fakeEscolasRepository.create({
      name: 'Escola Brasileira',
      cnpj: cnPJ
    });
    await expect(updateEscola.execute({
      name: '',
      cnpj: cnPJ,
    })).rejects.toBeInstanceOf(AppError);
  });

  it('Não ser possível atualizar uma escola com cnpj inválido.', async () => {
    await expect(updateEscola.execute({
      name: 'Escola Brasileira',
      cnpj: 'CNPJ inválido',
    })).rejects.toBeInstanceOf(AppError);
  });

});
