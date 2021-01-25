import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateTurmaService from '@modules/turmas/services/CreateTurmaService';
import ListTurmasService from '@modules/turmas/services/ListTurmasService';
import FindTurmaService from '@modules/turmas/services/FindTurmaService';
import UpdateTurmaService from '@modules/turmas/services/UpdateTurmaService';
import DeleteTurmaService from '@modules/turmas/services/DeleteTurmaService';

class TurmaController {
  public async create(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { name, escola_id } = request.body;

    const createTurma = container.resolve(CreateTurmaService);
    const turma = await createTurma.execute({
      escola_id,
      name
    });

    return response.json(turma);
  }

  public async index(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const listTurmas = container.resolve(ListTurmasService);

    const turmas = await listTurmas.execute();

    return response.json(turmas);
  }

  public async findOne(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { name } = request.body;

    const findTurmaService = container.resolve(FindTurmaService);

    const turma = await findTurmaService.execute({
      name
    });

    return response.json(turma);
  }

  public async update(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const { name, escola_id } = request.body;


    const updateTurmaService = container.resolve(UpdateTurmaService);

    const turma = await updateTurmaService.execute({
      id, name, escola_id
    });
    console.log(turma)

    return response.json(turma);
  }

  public async delete(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const deleteTurmaService = container.resolve(DeleteTurmaService);

    const turma = await deleteTurmaService.execute({
      id
    });

    return response.json(turma);
  }
}

export default TurmaController;
