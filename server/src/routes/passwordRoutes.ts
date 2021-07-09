import {Router} from 'express';
import PasswordController from '../controllers/passwordController';


const passwordRoutes = Router();
const passwordController = new PasswordController;

passwordRoutes.get('/', (req , res) => {
    passwordController.verifyConnection(req, res);
});

passwordRoutes.post('/', (req, res) => {
    passwordController.sendEmail(req, res)
})

passwordRoutes.put('/:userId', (req, res) => {
    passwordController.changePassword(req, res)
})
export default passwordRoutes;