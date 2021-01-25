import { injectable, inject } from 'tsyringe';

import Turma from '@modules/turmas/infra/typeorm/entities/Turma';

import ITurmasRepository from '@modules/turmas/repositories/ITurmasRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  escola_id: string;
}

@injectable()
class CreateTurmaService {
  constructor(
    @inject('TurmasRepository')
    private turmasRepository: ITurmasRepository,
  ) { }

  public async execute({
    name,
    escola_id,
  }: IRequest): Promise<Turma> {
    if (!name || !escola_id) {
      throw new AppError('Não é possível criar uma turma sem nome ou escola.');
    }

    const turma = await this.turmasRepository.create({
      name,
      escola_id,
    });

    return turma;
  }
}

export default CreateTurmaService;
