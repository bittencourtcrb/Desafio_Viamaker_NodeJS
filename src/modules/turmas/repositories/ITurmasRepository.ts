import Turma from '../infra/typeorm/entities/Turma';
import ICreateTurmaDTO from '../dtos/ICreateTurmaDTO';

export default interface IEscolasRepository {
  create(data: ICreateTurmaDTO): Promise<Turma>;
  findAllTurmas(): Promise<Turma[]>;
  findByName(name: string): Promise<Turma | undefined>;
  findById(id: string): Promise<Turma | undefined>;
  update(turma: Turma): Promise<Turma>;
  delete(id: string): Promise<string>;
}
