import { ObjectIdColumn, ObjectID, Entity, Column, OneToMany, JoinColumn } from 'typeorm';
import Turma from "@modules/turmas/infra/typeorm/entities/Turma";

@Entity('escolas')
class Escola {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @OneToMany(_type => Turma, turma => turma.escola)
  @JoinColumn({ name: 'escola_id' })
  turmas: Turma[];
}

export default Escola;
