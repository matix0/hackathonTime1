import { Router } from 'express';

// importa as rotas
import homeRoutes from './homeRoutes';
import userRoutes from './userRoutes';

const router = Router();

router.use('/', homeRoutes);
router.use('/user', userRoutes);

export default router;