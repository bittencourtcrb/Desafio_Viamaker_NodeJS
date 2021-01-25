import { getMongoRepository, MongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';

import ITurmasRepository from '@modules/turmas/repositories/ITurmasRepository';
import ICreateTurmaDTO from '@modules/turmas/dtos/ICreateTurmaDTO';

import Turma from '../entities/Turma';

class TurmasRepository implements ITurmasRepository {
  private ormRepository: MongoRepository<Turma>;

  constructor() {
    this.ormRepository = getMongoRepository(Turma);
  }

  public async create({
    name,
    escola_id
  }: ICreateTurmaDTO): Promise<Turma> {
    const turma = this.ormRepository.create({
      name,
      escola_id
    });

    await this.ormRepository.save(turma);
    return turma;
  }

  public async findAllTurmas(): Promise<Turma[]> {
    let turmas: Turma[];

    turmas = await this.ormRepository.find();

    return turmas;
  }


  public async findByName(name: string): Promise<Turma | undefined> {
    const turma = await this.ormRepository.findOne({ name });
    return turma;
  }

  public async findById(id: string): Promise<Turma | undefined> {
    const turma = await this.ormRepository.findOne(id);
    return turma;
  }

  public async update(turma: Turma): Promise<Turma> {
    return this.ormRepository.save(turma);
  }

  public async delete(ids: string): Promise<string> {
    const id = new ObjectID(ids);
    const turma = await this.ormRepository.deleteOne({ "_id": id });

    console.log(turma.deletedCount);


    return 'Exclusão de turma bem sucedida.';

  }

}

export default TurmasRepository;
