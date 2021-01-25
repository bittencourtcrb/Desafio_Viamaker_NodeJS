import { injectable, inject } from 'tsyringe';

import Escola from '@modules/escolas/infra/typeorm/entities/Escola';

import IEscolasRepository from '@modules/escolas/repositories/IEscolasRepository';
//import AppError from '@shared/errors/AppError';



@injectable()
class ListEscolasServices {
  constructor(
    @inject('EscolasRepository')
    private escolasRepository: IEscolasRepository,
  ) { }

  public async execute(): Promise<Escola[]> {
    const escola = await this.escolasRepository.findAllEscolas();

    return escola;
  }
}

export default ListEscolasServices;
