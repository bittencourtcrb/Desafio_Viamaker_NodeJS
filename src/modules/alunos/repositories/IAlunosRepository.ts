import Aluno from '../infra/typeorm/entities/Aluno';
import ICreateAlunoDTO from '../dtos/ICreateAlunoDTO';

export default interface IEscolasRepository {
  create(data: ICreateAlunoDTO): Promise<Aluno>;
  findAllAlunos(): Promise<Aluno[]>;
  findById(id: string): Promise<Aluno | undefined>;
  update(aluno: Aluno): Promise<Aluno>;
  delete(id: string): Promise<string>;
}
