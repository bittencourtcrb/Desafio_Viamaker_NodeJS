import { container } from 'tsyringe';

import IEscolasRepository from '@modules/escolas/repositories/IEscolasRepository';
import EscolasRepository from '@modules/escolas/infra/typeorm/repositories/EscolasRepository';

import ITurmasRepository from '@modules/turmas/repositories/ITurmasRepository';
import TurmasRepository from '@modules/turmas/infra/typeorm/repositories/TurmasRepository';

import IAlunosRepository from '@modules/alunos/repositories/IAlunosRepository';
import AlunosRepository from '@modules/alunos/infra/typeorm/repositories/AlunosRepository';

container.registerSingleton<IEscolasRepository>(
  'EscolasRepository',
  EscolasRepository,
);

container.registerSingleton<ITurmasRepository>(
  'TurmasRepository',
  TurmasRepository,
);

container.registerSingleton<IAlunosRepository>(
  'AlunosRepository',
  AlunosRepository,
);

