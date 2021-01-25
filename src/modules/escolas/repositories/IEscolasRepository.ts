import Escola from '../infra/typeorm/entities/Escola';
import ICreateEscolaDTO from '../dtos/ICreateEscolaDTO';

export default interface IEscolasRepository {
  create(data: ICreateEscolaDTO): Promise<Escola>;
  findAllEscolas(): Promise<Escola[]>;
  findById(id: string): Promise<Escola | undefined>;
  findByCNPJ(cnpj: string): Promise<Escola | undefined>;
  update(escola: Escola): Promise<Escola>;
  delete(id: string): Promise<string>;
}
