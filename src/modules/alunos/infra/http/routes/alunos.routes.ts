import { Router } from 'express';

import AlunosController from '../controllers/AlunosControler';

const alunosRouter = Router();
const alunossController = new AlunosController();

alunosRouter.post('/', alunossController.create);
alunosRouter.get('/', alunossController.index);
alunosRouter.get('/unique', alunossController.findOne);
alunosRouter.put('/:id', alunossController.update);
alunosRouter.delete('/:id', alunossController.delete);

export default alunosRouter;
