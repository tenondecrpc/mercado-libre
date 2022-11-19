import { Request, Response } from "express";
import { httpStatusCodes } from '../helper/Util';
import { FindByQueryItemsService } from "../services/FindByQueryItemsService";

class FindByQueryItemsController {
  async handle(request: Request, response: Response) {
    const service = new FindByQueryItemsService();
    try {
      const items = await service.execute("query");
      
      response.status(httpStatusCodes.OK).send(items);
    } catch (error) {
      response.status(httpStatusCodes.BAD_REQUEST).send({message: error.message});
    }
  }
}
export { FindByQueryItemsController };