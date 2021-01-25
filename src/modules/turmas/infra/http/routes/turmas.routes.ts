import { Router } from 'express';

import TurmasController from '../controllers/TurmasControler';

const turmasRouter = Router();
const turmasController = new TurmasController();

turmasRouter.post('/', turmasController.create);
turmasRouter.get('/', turmasController.index);
turmasRouter.get('/unique', turmasController.findOne);
turmasRouter.put('/:id', turmasController.update);
turmasRouter.delete('/:id', turmasController.delete);

export default turmasRouter;
