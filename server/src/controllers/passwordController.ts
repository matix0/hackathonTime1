import User from '../models/userSchema'
import {Request, Response} from 'express'
import transporter from '../config/smtp'
import * as bcrypt from 'bcryptjs'


export default class PasswordController{
    verifyConnection = async(req: Request, res: Response) => {
        transporter.verify(function(error, success) {
            if (error) {
              console.log(error);
              return res.status(400).json({message: error})
            } else {
              console.log("Server is ready to take our messages");
            }
        })
    }
    
    sendEmail = async(req: Request, res: Response) => {
        const {email} = req.body

        const userExists = await User.findOne({email})
        if(!userExists){
            return res.status(400).json({message: "Esse email não está associado a nenhuma conta"})
        } 
        
        const emailInfo = {
            from: 'thyago.anjos@orcestra.com.br',
            to: userExists.email,
            subject: 'Recuperação de Senha',
            text: '',
            html: `<div>
                <h1>
                    <a href='http://localhost:3000/recover_password/${userExists._id}'>
                        Clique aqui para redefinir sua senha!
                    </ a>
                </h1>
            <div>`,
        }
        
        const mailSent = transporter.sendMail(emailInfo, (error) => {
            if (error) {
                return res.status(400).json({message: error})
            }
            return res.status(200).json({message: "Email enviado"})
        })
    }

    changePassword = async(req: Request, res: Response) => {
        const {password} = req.body
        const {userId} = req.params
        try {
            const userExists = await User.findById(userId);
            const hashedPassword = bcrypt.hashSync(password, 10);
            await userExists.updateOne({password: hashedPassword})
            return res.status(200).json({message: "Senha redefina com sucesso"})
        } catch (error) {
            return res.status(400).json({message: "Erro ao redefinir senha"})   
        }
    }
}