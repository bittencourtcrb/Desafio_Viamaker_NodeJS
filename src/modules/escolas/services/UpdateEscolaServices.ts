import { injectable, inject } from 'tsyringe';

import Escola from '@modules/escolas/infra/typeorm/entities/Escola';

import IEscolasRepository from '@modules/escolas/repositories/IEscolasRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  cnpj: string;
}

@injectable()
class UpdateEscolaService {
  constructor(
    @inject('EscolasRepository')
    private escolasRepository: IEscolasRepository,
  ) { }

  public async execute({
    name, cnpj
  }: IRequest): Promise<Escola> {
    const escola = await this.escolasRepository.findByCNPJ(cnpj);

    if (!name) {
      throw new AppError('Nome da escola não pode ser vazio.');
    }

    if (!escola) {
      throw new AppError('Escola não encontrada.');
    }

    escola.name = name;

    return await this.escolasRepository.update(escola);
  }
}

export default UpdateEscolaService;
