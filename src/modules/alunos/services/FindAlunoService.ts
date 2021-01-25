import { injectable, inject } from 'tsyringe';

import Aluno from '@modules/alunos/infra/typeorm/entities/Aluno';

import IAlunosRepository from '@modules/alunos/repositories/IAlunosRepository';
//import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

@injectable()
class FindAlunoService {
  constructor(
    @inject('AlunosRepository')
    private alunosRepository: IAlunosRepository,
  ) { }

  public async execute({
    id,
  }: IRequest): Promise<Aluno | undefined> {
    const aluno = await this.alunosRepository.findById(id);

    return aluno;
  }
}

export default FindAlunoService;
