import { Router } from 'express';
import { FindByQueryItemsController } from './controllers/FindByQueryItemsController';

const router = Router();

// Public routers
router.get('/api/items', new FindByQueryItemsController().handle);

// Private routers

export default router;