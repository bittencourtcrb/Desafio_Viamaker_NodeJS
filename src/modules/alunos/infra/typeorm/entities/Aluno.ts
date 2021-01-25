import {
  ObjectID,
  Entity,
  Column,
  ObjectIdColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import Turma from "@modules/turmas/infra/typeorm/entities/Turma";

@Entity('alunos')
class Aluno {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  turma_id: string;

  @ManyToOne(() => Turma)
  @JoinColumn({ name: 'turma_id' })
  turma: Turma;

}

export default Aluno;
