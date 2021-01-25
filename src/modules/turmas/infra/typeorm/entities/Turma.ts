import {
  ObjectID,
  Entity,
  Column,
  ObjectIdColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import Escola from "@modules/escolas/infra/typeorm/entities/Escola";

@Entity('turmas')
class Turma {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  escola_id: string;

  @ManyToOne(() => Escola)
  @JoinColumn({ name: 'escola_id' })
  escola: Escola;

}

export default Turma;
