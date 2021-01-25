import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateAlunoService from '@modules/alunos/services/CreateAlunoService';
import ListAlunosService from '@modules/alunos/services/ListAlunosService';
import FindAlunoService from '@modules/alunos/services/FindAlunoService';
import UpdateAlunoService from '@modules/alunos/services/UpdateAlunoService';
import DeleteAlunoService from '@modules/alunos/services/DeleteAlunoService';

class AlunoController {
  public async create(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { name, turma_id } = request.body;

    const createAluno = container.resolve(CreateAlunoService);
    const aluno = await createAluno.execute({
      turma_id,
      name
    });

    return response.json(aluno);
  }

  public async index(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const listAlunos = container.resolve(ListAlunosService);

    const alunos = await listAlunos.execute();

    return response.json(alunos);
  }

  public async findOne(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.body;

    const findAluno = container.resolve(FindAlunoService);

    const aluno = await findAluno.execute({
      id
    });

    return response.json(aluno);
  }

  public async update(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const { name, turma_id } = request.body;

    const updateAluno = container.resolve(UpdateAlunoService);

    const aluno = await updateAluno.execute({
      id, name, turma_id
    });

    return response.json(aluno);
  }

  public async delete(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const deleteAluno = container.resolve(DeleteAlunoService);

    const aluno = await deleteAluno.execute({
      id
    });

    return response.json(aluno);
  }
}

export default AlunoController;
