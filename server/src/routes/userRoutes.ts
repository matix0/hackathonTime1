import {Router} from 'express';
import { verifyToken } from '../services/middleware';
import UserController from '../controllers/userController';


const userRoutes = Router();
const userController = new UserController;

userRoutes.post('/', (req , res) => {
    userController.createUser(req, res);
});

userRoutes.get('/', verifyToken, (req, res) => {
    userController.getAllUsers(req,res);
});

userRoutes.post('/login', (req, res) => {
    userController.loginUser(req, res);
})

export default userRoutes;