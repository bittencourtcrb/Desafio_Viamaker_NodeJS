import { injectable, inject } from 'tsyringe';

import Turma from '@modules/turmas/infra/typeorm/entities/Turma';

import ITurmasRepository from '@modules/turmas/repositories/ITurmasRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
  name: string;
  escola_id: string;
}

@injectable()
class UpdateTurmaService {
  constructor(
    @inject('TurmasRepository')
    private turmasRepository: ITurmasRepository,
  ) { }

  public async execute({
    id, name, escola_id
  }: IRequest): Promise<Turma> {
    const turma = await this.turmasRepository.findById(id);

    if (!turma) {
      throw new AppError('Turma não encontrada.');
    }

    turma.name = name;
    turma.escola_id = escola_id;

    return await this.turmasRepository.update(turma);
  }
}

export default UpdateTurmaService;
