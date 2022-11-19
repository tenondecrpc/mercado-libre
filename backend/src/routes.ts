import { Router } from 'express';
import { FindByQueryItemsController } from './controllers/FindByQueryItemsController';

const router = Router();

// Public routers
router.get('/', new FindByQueryItemsController().handle);

// Private routers

export default router;