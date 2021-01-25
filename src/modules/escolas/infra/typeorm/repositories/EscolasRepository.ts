import { getMongoRepository, MongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';

import IEscolasRepository from '@modules/escolas/repositories/IEscolasRepository';
import ICreateEscolaDTO from '@modules/escolas/dtos/ICreateEscolaDTO';

import Escola from '../entities/Escola';

class EscolasRepository implements IEscolasRepository {
  private ormRepository: MongoRepository<Escola>;

  constructor() {
    this.ormRepository = getMongoRepository(Escola);
  }

  public async create({
    name,
    cnpj
  }: ICreateEscolaDTO): Promise<Escola> {
    const escola = this.ormRepository.create({
      name,
      cnpj
    });
    await this.ormRepository.save(escola);
    return escola;
  }

  public async findAllEscolas(): Promise<Escola[]> {
    let escolas: Escola[];

    escolas = await this.ormRepository.find();

    return escolas;
  }

  public async findById(id: string): Promise<Escola | undefined> {
    const escola = await this.ormRepository.findOne(id);
    return escola;
  }

  public async findByCNPJ(cnpj: string): Promise<Escola | undefined> {
    const escola = await this.ormRepository.findOne({ cnpj });
    return escola;
  }

  public async update(escola: Escola): Promise<Escola> {
    return this.ormRepository.save(escola);
  }

  public async delete(ids: string): Promise<string> {
    const id = new ObjectID(ids);
    const escola = await this.ormRepository.deleteOne({ "_id": id });

    console.log();
    if (escola.deletedCount) {
      if (escola.deletedCount === 0) {
        return 'Exclusão de escola mal sucedida.';
      }
    }

    return 'Exclusão de escola bem sucedida.';
  }

}

export default EscolasRepository;
