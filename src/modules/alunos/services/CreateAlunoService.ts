import { injectable, inject } from 'tsyringe';

import Aluno from '@modules/alunos/infra/typeorm/entities/Aluno';

import IAlunosRepository from '@modules/alunos/repositories/IAlunosRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  turma_id: string;
}

@injectable()
class CreateTurmaService {
  constructor(
    @inject('AlunosRepository')
    private alunosRepository: IAlunosRepository,
  ) { }

  public async execute({
    name,
    turma_id,
  }: IRequest): Promise<Aluno> {
    if (!name || !turma_id) {
      throw new AppError('Não é possível criar uma turma sem nome ou escola.');
    }

    const aluno = await this.alunosRepository.create({
      name,
      turma_id,
    });

    return aluno;
  }
}

export default CreateTurmaService;
