import { injectable, inject } from 'tsyringe';
import { cnpj as CNPJ } from 'cpf-cnpj-validator';
import Escola from '@modules/escolas/infra/typeorm/entities/Escola';

import IEscolasRepository from '@modules/escolas/repositories/IEscolasRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  cnpj: string;
}

@injectable()
class CreateEscolaService {
  constructor(
    @inject('EscolasRepository')
    private escolasRepository: IEscolasRepository,
  ) { }

  public async execute({
    name,
    cnpj,
  }: IRequest): Promise<Escola> {
    if (!name || !cnpj) {
      throw new AppError('Não é possível criar uma escola sem nome ou cnpj.');
    }

    if (!CNPJ.isValid(cnpj)) {
      throw new AppError('Não é possível criar uma escola com cnpj inválido.');
    }

    const checkEscolaExists = await this.escolasRepository.findByCNPJ(cnpj);

    if (checkEscolaExists) {
      throw new AppError('CNPJ já cadastrado anteriormente.');
    }

    const escola = await this.escolasRepository.create({
      name,
      cnpj,
    });

    return escola;
  }
}

export default CreateEscolaService;
