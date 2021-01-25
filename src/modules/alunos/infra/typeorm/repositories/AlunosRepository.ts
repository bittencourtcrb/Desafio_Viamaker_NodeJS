import { getMongoRepository, MongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';

import IAlunosRepository from '@modules/alunos/repositories/IAlunosRepository';
import ICreateAlunoDTO from '@modules/alunos/dtos/ICreateAlunoDTO';

import Aluno from '../entities/Aluno';

class AlunosRepository implements IAlunosRepository {
  private ormRepository: MongoRepository<Aluno>;

  constructor() {
    this.ormRepository = getMongoRepository(Aluno);
  }

  public async create({
    name,
    turma_id
  }: ICreateAlunoDTO): Promise<Aluno> {
    const aluno = this.ormRepository.create({
      name,
      turma_id
    });

    await this.ormRepository.save(aluno);
    return aluno;
  }

  public async findAllAlunos(): Promise<Aluno[]> {
    let alunos: Aluno[];

    alunos = await this.ormRepository.find();

    return alunos;
  }


  public async findById(id: string): Promise<Aluno | undefined> {
    const aluno = await this.ormRepository.findOne(id);
    return aluno;
  }


  public async update(aluno: Aluno): Promise<Aluno> {
    return this.ormRepository.save(aluno);
  }

  public async delete(ids: string): Promise<string> {
    const id = new ObjectID(ids);
    const aluno = await this.ormRepository.deleteOne({ "_id": id });

    console.log(aluno.deletedCount);


    return 'Exclusão de aluno bem sucedida.';

  }

}

export default AlunosRepository;
