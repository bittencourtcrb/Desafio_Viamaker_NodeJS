import IAlunosRepository from '@modules/alunos/repositories/IAlunosRepository';
import ICreateAlunoDTO from '@modules/alunos/dtos/ICreateAlunoDTO';
import { ObjectID } from 'mongodb';

import Aluno from '../../infra/typeorm/entities/Aluno';

class FakeAlunosRepository implements IAlunosRepository {
  private alunos: Aluno[] = [];

  public async create(
    AlunoData: ICreateAlunoDTO): Promise<Aluno> {
    const aluno = new Aluno();

    Object.assign(aluno, { id: '12345678' }, AlunoData);
    this.alunos.push(aluno);

    return aluno;
  }

  public async findAllAlunos(): Promise<Aluno[]> {
    const { alunos } = this;

    return alunos;
  }

  public async findById(id: string): Promise<Aluno | undefined> {
    const findAluno = this.alunos.find(aluno => aluno.id === new ObjectID(id))
    return findAluno;
  }

  public async update(aluno: Aluno): Promise<Aluno> {
    const findIndex = this.alunos.findIndex(
      findAluno => findAluno.id === aluno.id,
    );
    this.alunos[findIndex] = aluno;
    return aluno;
  }

  public async delete(ids: string): Promise<string> {
    const findIndex = this.alunos.findIndex(
      findAluno => findAluno.id.toHexString() === ids,
    );

    this.alunos.splice(findIndex, 1);

    return 'Exclusão de aluno bem sucedida.';

  }
}
export default FakeAlunosRepository;
