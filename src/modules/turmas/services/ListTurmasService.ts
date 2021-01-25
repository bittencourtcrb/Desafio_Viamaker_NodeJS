import { injectable, inject } from 'tsyringe';

import Turma from '@modules/turmas/infra/typeorm/entities/Turma';

import ITurmasRepository from '@modules/turmas/repositories/ITurmasRepository';
//import AppError from '@shared/errors/AppError';

@injectable()
class ListTurmasServices {
  constructor(
    @inject('TurmasRepository')
    private turmasRepository: ITurmasRepository,
  ) { }

  public async execute(): Promise<Turma[]> {
    const turma = await this.turmasRepository.findAllTurmas();

    return turma;
  }
}

export default ListTurmasServices;
