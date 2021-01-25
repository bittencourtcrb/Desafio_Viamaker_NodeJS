import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateEscolaService from '@modules/escolas/services/CreateEscolaService';
import ListEscolasServices from '@modules/escolas/services/ListEscolasServices';
import FindEscolaServices from '@modules/escolas/services/FindEscolaService';
import UpdateEscolaServices from '@modules/escolas/services/UpdateEscolaServices';
import DeleteEscolaServices from '@modules/escolas/services/DeleteEscolaServices';

class EscolaController {
  public async create(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { name, cnpj } = request.body;

    const createEscola = container.resolve(CreateEscolaService);
    const escola = await createEscola.execute({
      name,
      cnpj,
    });

    return response.json(escola);
  }

  public async index(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const listEscolas = container.resolve(ListEscolasServices);

    const escolas = await listEscolas.execute();

    return response.json(escolas);
  }

  public async findOne(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { cnpj } = request.body;

    const findEscolaService = container.resolve(FindEscolaServices);

    const escola = await findEscolaService.execute({
      cnpj
    });

    return response.json(escola);
  }

  public async update(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { name, cnpj } = request.body;

    const updateEscolaServices = container.resolve(UpdateEscolaServices);

    const escola = await updateEscolaServices.execute({
      name, cnpj
    });

    return response.json(escola);
  }

  public async delete(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const deleteEscolaServices = container.resolve(DeleteEscolaServices);

    const escola = await deleteEscolaServices.execute({
      id
    });

    return response.json(escola);
  }
}

export default EscolaController;
