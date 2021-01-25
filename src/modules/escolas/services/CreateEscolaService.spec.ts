import AppError from '@shared/errors/AppError';
import FakeEscolasRepository from '../repositories/fakes/FakeEscolasRepository';
import CreateEscolaService from './CreateEscolaService';
import { cnpj as CNPJ } from 'cpf-cnpj-validator';

let fakeEscolasRepository: FakeEscolasRepository;
let createEscola: CreateEscolaService;

describe('CreateEscola', () => {
  beforeEach(() => {
    fakeEscolasRepository = new FakeEscolasRepository();
    createEscola = new CreateEscolaService(
      fakeEscolasRepository,
    );
  });
  it('Ser possível a criação de uma escola.', async () => {
    const escola = await createEscola.execute({
      name: 'Escola Brasileira',
      cnpj: CNPJ.generate()
    });

    expect(escola).toHaveProperty('id');
  });

  it('Não ser possível a criação de uma escola com nome vazio', async () => {
    await expect(
      createEscola.execute({
        name: '',
        cnpj: CNPJ.generate(),
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Não ser possível a criação de uma escola com cnpj vazio', async () => {
    await expect(
      createEscola.execute({
        name: 'Escola Brasileira',
        cnpj: '',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Não ser possível a criação de uma escola com cnpj inválido', async () => {
    await expect(
      createEscola.execute({
        name: 'Escola Brasileira',
        cnpj: '828282',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Não ser possível a criação de uma escola com cnpj já utilizado', async () => {
    await createEscola.execute({
      name: 'Escola Brasileira',
      cnpj: '26155638000195',
    }),

      await expect(
        createEscola.execute({
          name: 'Escola Brasileira',
          cnpj: '26155638000195',
        }),
      ).rejects.toBeInstanceOf(AppError);
  });
});
