import { injectable, inject } from 'tsyringe';

import Escola from '@modules/escolas/infra/typeorm/entities/Escola';

import IEscolasRepository from '@modules/escolas/repositories/IEscolasRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  cnpj: string;
}

@injectable()
class FindEscolaService {
  constructor(
    @inject('EscolasRepository')
    private escolasRepository: IEscolasRepository,
  ) { }

  public async execute({
    cnpj,
  }: IRequest): Promise<Escola | undefined> {
    const escola = await this.escolasRepository.findByCNPJ(cnpj);

    if (!escola) {
      throw new AppError('Escola não encontrada');
    }

    return escola;
  }
}

export default FindEscolaService;
