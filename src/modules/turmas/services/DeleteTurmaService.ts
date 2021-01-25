import { injectable, inject } from 'tsyringe';

import ITurmasRepository from '@modules/turmas/repositories/ITurmasRepository';
//import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

@injectable()
class DeleteTurmaService {
  constructor(
    @inject('TurmasRepository')
    private turmasRepository: ITurmasRepository,
  ) { }

  public async execute({
    id,
  }: IRequest): Promise<string> {
    const turma = await this.turmasRepository.delete(id);

    return turma;
  }
}

export default DeleteTurmaService;
