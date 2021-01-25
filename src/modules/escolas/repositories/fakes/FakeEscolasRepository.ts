import IEscolasRepository from '@modules/escolas/repositories/IEscolasRepository';
import ICreateEscolaDTO from '@modules/escolas/dtos/ICreateEscolaDTO';
import { ObjectID } from 'mongodb';

import Escola from '../../infra/typeorm/entities/Escola';

class EscolasRepository implements IEscolasRepository {
  private escolas: Escola[] = [];

  public async create(
    escolaData: ICreateEscolaDTO): Promise<Escola> {
    const escola = new Escola();

    Object.assign(escola, { id: '12345678' }, escolaData);
    this.escolas.push(escola);

    return escola;
  }


  public async findAllEscolas(): Promise<Escola[]> {
    const { escolas } = this;

    return escolas;
  }

  public async findById(id: string): Promise<Escola | undefined> {
    const findEscola = this.escolas.find(escola => escola.id === new ObjectID(id))
    return findEscola;
  }

  public async findByCNPJ(cnpj: string): Promise<Escola | undefined> {
    const findEscola = this.escolas.find(escola => escola.cnpj == cnpj);
    return findEscola;
  }

  public async update(escola: Escola): Promise<Escola> {
    const findIndex = this.escolas.findIndex(
      findEscola => findEscola.id === escola.id,
    );
    this.escolas[findIndex] = escola;
    return escola;
  }

  public async delete(ids: string): Promise<string> {
    const findIndex = this.escolas.findIndex(
      findEscola => findEscola.id.toHexString() === ids,
    );

    this.escolas.splice(findIndex, 1);


    return 'Exclusão de escola bem sucedida.';

  }

}

export default EscolasRepository;
