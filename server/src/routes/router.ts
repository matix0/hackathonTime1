import { Router } from 'express';

// importa as rotas
import homeRoutes from './homeRoutes';
import userRoutes from './userRoutes';
import feedRoutes from './feedRoutes';
import passwordRoutes from './passwordRoutes';
import likeRoutes from './likeRoutes';

const router = Router();

router.use('/', homeRoutes);
router.use('/user', userRoutes);
router.use('/feed', feedRoutes);
router.use('/password', passwordRoutes);
router.use('/like', likeRoutes);
 
export default router;