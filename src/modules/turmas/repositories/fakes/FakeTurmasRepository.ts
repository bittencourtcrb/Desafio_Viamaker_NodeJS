import ITurmasRepository from '@modules/turmas/repositories/ITurmasRepository';
import ICreateTurmaDTO from '@modules/turmas/dtos/ICreateTurmaDTO';
import { ObjectID } from 'mongodb';

import Turma from '../../infra/typeorm/entities/Turma';

class FakeTurmasRepository implements ITurmasRepository {
  private turmas: Turma[] = [];

  public async create(
    escolaData: ICreateTurmaDTO): Promise<Turma> {
    const turma = new Turma();

    Object.assign(turma, { id: '12345678' }, escolaData);
    this.turmas.push(turma);

    return turma;
  }

  public async findAllTurmas(): Promise<Turma[]> {
    const { turmas } = this;

    return turmas;
  }

  public async findById(id: string): Promise<Turma | undefined> {
    const findTurma = this.turmas.find(escola => escola.id === new ObjectID(id))
    return findTurma;
  }

  public async update(turma: Turma): Promise<Turma> {
    const findIndex = this.turmas.findIndex(
      findTurma => findTurma.id === turma.id,
    );
    this.turmas[findIndex] = turma;
    return turma;
  }

  public async delete(ids: string): Promise<string> {
    const findIndex = this.turmas.findIndex(
      findTurma => findTurma.id.toHexString() === ids,
    );

    this.turmas.splice(findIndex, 1);

    return 'Exclusão de escola bem sucedida.';

  }
}
export default FakeTurmasRepository;
