import {Request, Response} from 'express'
import User from '../models/userSchema'
import * as bcrypt from 'bcryptjs'

export default class UserController {
    createUser = async(req: Request, res: Response) => {
        try {
            req.body.password =bcrypt.hashSync(req.body.password, 10);
            await User.create(req.body);
            res.status(200).json({message: "Usuário criado com sucesso"})
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

