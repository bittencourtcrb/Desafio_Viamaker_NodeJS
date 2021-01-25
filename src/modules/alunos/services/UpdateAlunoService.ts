import { injectable, inject } from 'tsyringe';

import Aluno from '@modules/alunos/infra/typeorm/entities/Aluno';

import IAlunosRepository from '@modules/alunos/repositories/IAlunosRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
  name: string;
  turma_id: string;
}

@injectable()
class UpdateAlunoService {
  constructor(
    @inject('AlunosRepository')
    private alunosRepository: IAlunosRepository,
  ) { }

  public async execute({
    id, name, turma_id
  }: IRequest): Promise<Aluno> {
    const aluno = await this.alunosRepository.findById(id);

    if (!aluno) {
      throw new AppError('Aluno não encontrado.');
    }

    aluno.name = name;
    aluno.turma_id = turma_id;

    return await this.alunosRepository.update(aluno);
  }
}

export default UpdateAlunoService;
