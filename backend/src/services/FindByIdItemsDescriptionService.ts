import 'dotenv/config';
import axios from 'axios';

class FindByIdItemsDescriptionService {
  async execute(id: String) {
    const { data: { plain_text} } = await axios.get(`${process.env.HOST}/items/${id}/description`);
    return plain_text;
  }
}

export { FindByIdItemsDescriptionService };