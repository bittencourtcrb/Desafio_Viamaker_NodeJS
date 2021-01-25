import { Router } from 'express';

import EscolaController from '../controllers/EscolasController';

const escolasRouter = Router();
const escolasController = new EscolaController();

escolasRouter.post('/', escolasController.create);
escolasRouter.get('/', escolasController.index);
escolasRouter.get('/unique', escolasController.findOne);
escolasRouter.put('/', escolasController.update);
escolasRouter.delete('/:id', escolasController.delete);

export default escolasRouter;
