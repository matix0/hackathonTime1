import { Router } from 'express';

// importa as rotas
import homeRoutes from './homeRoutes';
import userRoutes from './userRoutes';
import feedRoutes from './feedRoutes';

const router = Router();

router.use('/', homeRoutes);
router.use('/user', userRoutes);
router.use('/feed', feedRoutes);

export default router;