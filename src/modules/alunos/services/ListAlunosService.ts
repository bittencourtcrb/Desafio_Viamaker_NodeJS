import { injectable, inject } from 'tsyringe';

import Aluno from '@modules/alunos/infra/typeorm/entities/Aluno';

import IAlunosRepository from '@modules/alunos/repositories/IAlunosRepository';
//import AppError from '@shared/errors/AppError';

@injectable()
class ListAlunosServices {
  constructor(
    @inject('AlunosRepository')
    private alunosRepository: IAlunosRepository,
  ) { }

  public async execute(): Promise<Aluno[]> {
    const alunos = await this.alunosRepository.findAllAlunos();

    return alunos;
  }
}

export default ListAlunosServices;
