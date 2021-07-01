import {Request, Response} from 'express'
import User from '../models/userSchema'

export default class UserController {
    createUser = async(req: Request, res: Response) => {
        try {
            const userCreated = await User.create(req.body);
            res.status(200).send({userCreated});
        } catch (error) {
            res.status(400).json({message: "Falha em criar usuário"})
        }
    }
    getAllUsers = async(req: Request, res: Response) => {
        try {
            const response = await User.find();
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({message: "Falha em listar usuários"})
        }
    }

}

