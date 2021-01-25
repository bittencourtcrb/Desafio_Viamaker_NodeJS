import FakeEscolasRepository from '../repositories/fakes/FakeEscolasRepository';
import FindEscolaService from './FindEscolaService';
import { cnpj as CNPJ } from 'cpf-cnpj-validator';
import AppError from '@shared/errors/AppError';

let fakeEscolasRepository: FakeEscolasRepository;
let findEscola: FindEscolaService;

describe('FindEscola', () => {
  beforeEach(() => {
    fakeEscolasRepository = new FakeEscolasRepository();
    findEscola = new FindEscolaService(
      fakeEscolasRepository,
    );
  });
  it('Ser possível encontrar uma escola.', async () => {
    const cnPJ = CNPJ.generate()
    await fakeEscolasRepository.create({
      name: 'Escola Brasileira',
      cnpj: cnPJ
    });
    const escola = await findEscola.execute({
      cnpj: cnPJ,
    });

    expect(escola?.name).toBe('Escola Brasileira');
  });

  it('Não ser possível encontrar uma escola.', async () => {
    await expect(findEscola.execute({
      cnpj: 'CNPJ invalido',
    })).rejects.toBeInstanceOf(AppError);
  });


});
