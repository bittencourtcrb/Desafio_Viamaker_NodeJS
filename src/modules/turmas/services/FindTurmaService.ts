import { injectable, inject } from 'tsyringe';

import Turma from '@modules/turmas/infra/typeorm/entities/Turma';

import ITurmasRepository from '@modules/turmas/repositories/ITurmasRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
}

@injectable()
class FindTurmaService {
  constructor(
    @inject('TurmasRepository')
    private turmasRepository: ITurmasRepository,
  ) { }

  public async execute({
    name,
  }: IRequest): Promise<Turma | undefined> {
    if (!name) {
      throw new AppError('Nome da turma não encontrado.');
    }
    const turma = await this.turmasRepository.findByName(name);
    if (!turma) {
      throw new AppError('Não é possível encontrar a turma procurada.');
    }
    return turma;
  }
}

export default FindTurmaService;
