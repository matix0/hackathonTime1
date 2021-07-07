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
export default passwordRoutes;