import { Router } from 'express';
import { FindByIdItemsController } from './controllers/FindByIdItemsController';
import { FindByQueryItemsController } from './controllers/FindByQueryItemsController';

const router = Router();

// Public routers
router.get('/api/items', new FindByQueryItemsController().handle);
router.get('/api/items/:id', new FindByIdItemsController().handle);

// Private routers

export default router;