import 'dotenv/config';
import axios from 'axios';

class FindByQueryItemsService {
  async execute(query: String) {
    const { data: { results } } = await axios.get(`${process.env.HOST}/sites/MLA/search?q=${query}&limit=4`);
    return results;
  }
}

export { FindByQueryItemsService };