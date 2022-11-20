import { Request, Response } from 'express';
import { httpStatusCodes } from '../helper/Util';
import { FindByQueryItemsService } from '../services/FindByQueryItemsService';

class FindByQueryItemsController {
  async handle(request: Request, response: Response) {
    const { query } = request || {};
    const { q } = query || {};

    if (!q) return response.status(httpStatusCodes.BAD_REQUEST).send({ message: "INVALID_QUERY" });

    const service = new FindByQueryItemsService();
    try {
      const items = await service.execute(q.toString());
      const author = {
        name: 'Cristian',
        lastname: 'Paniagua'
      };
      const categories = items.map(item => item.category_id);
      const filterItems = [];
      items.forEach(i => {
        const price = {
          currency: i.presentation ? i.presentation.display_currency : i.currency_id,
          amount: i.price,
          decimals: Number.isInteger(i.price) ? 0 : 2
        };
        const item  = {
          id: i.id,
          title: i.title,
          price,
          picture: i.thumbnail,
          condition: i.condition,
          free_shipping: i.shipping.free_shipping
        };
        filterItems.push(item);
      });
      const data = {author, categories, items: filterItems};
      response.status(httpStatusCodes.OK).send(data);
    } catch (error) {
      response.status(httpStatusCodes.BAD_REQUEST).send({message: error.message});
    }
  }
}
export { FindByQueryItemsController };