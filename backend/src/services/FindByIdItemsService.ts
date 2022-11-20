import 'dotenv/config';
import axios from 'axios';

class FindByIdItemsService {
  async execute(id: String) {
    const { data } = await axios.get(`${process.env.HOST}/items/${id}`);
    return data;
  }
}

export { FindByIdItemsService };