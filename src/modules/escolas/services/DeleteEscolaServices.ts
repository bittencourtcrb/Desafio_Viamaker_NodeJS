import { injectable, inject } from 'tsyringe';

import IEscolasRepository from '@modules/escolas/repositories/IEscolasRepository';
//import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

@injectable()
class DeleteEscolaService {
  constructor(
    @inject('EscolasRepository')
    private escolasRepository: IEscolasRepository,
  ) { }

  public async execute({
    id,
  }: IRequest): Promise<string> {
    const escola = await this.escolasRepository.delete(id);

    return escola;
  }
}

export default DeleteEscolaService;
