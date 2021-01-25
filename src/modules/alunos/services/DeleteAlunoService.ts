import { injectable, inject } from 'tsyringe';

import IAlunosRepository from '@modules/alunos/repositories/IAlunosRepository';
//import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

@injectable()
class DeleteAlunoService {
  constructor(
    @inject('AlunosRepository')
    private alunosRepository: IAlunosRepository,
  ) { }

  public async execute({
    id,
  }: IRequest): Promise<string> {
    const aluno = await this.alunosRepository.delete(id);

    return aluno;
  }
}

export default DeleteAlunoService;
