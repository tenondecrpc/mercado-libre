import { Request, Response } from 'express';
import axios from 'axios';
import { httpStatusCodes } from '../helper/Util';
import { FindByIdItemsService } from '../services/FindByIdItemsService';
import { FindByIdItemsDescriptionService } from '../services/FindByIdItemsDescriptionService';

class FindByIdItemsController {
  async handle(request: Request, response: Response) {
    const { params } = request || {};
    const { id } = params || {};

    if (!id) return response.status(httpStatusCodes.BAD_REQUEST).send({ message: "INVALID_ID" });

    const service = new FindByIdItemsService();
    try {
      const item = await service.execute(id.toString());
      const author = {
        name: 'Cristian',
        lastname: 'Paniagua'
      };
      const price = {
        currency: item.presentation ? item.presentation.display_currency : item.currency_id,
        amount: item.price,
        decimals: Number.isInteger(item.price) ? 0 : 2
      };
      const serviceDescription = new FindByIdItemsDescriptionService();
      const description = await serviceDescription.execute(id.toString());
      const filterItem = {
        id: item.id,
        title: item.title,
        price,
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
        description
      };
      const data = {author, item: filterItem};
      response.status(httpStatusCodes.OK).send(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response: { status } } = error || {};
        if (status === 404) {
          response.status(httpStatusCodes.NOT_FOUND).send({ message: 'ITEM_NOT_FOUND' });
          return;
        }
        response.status(status).send({ message: error.message });
        return;
      } 
      response.status(httpStatusCodes.BAD_REQUEST).send({message: error.message});
    }
  }
}
export { FindByIdItemsController };