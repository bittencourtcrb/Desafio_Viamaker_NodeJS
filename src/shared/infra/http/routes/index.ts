import { Router } from 'express';

import escolasRouter from '@modules/escolas/infra/http/routes/escolas.routes';
import turmasRouter from '@modules/turmas/infra/http/routes/turmas.routes';
import alunosRouter from '@modules/alunos/infra/http/routes/alunos.routes';

const routes = Router();

routes.use('/escolas', escolasRouter);
routes.use('/turmas', turmasRouter);
routes.use('/alunos', alunosRouter);


export default routes;
