import  * as nodemailer from 'nodemailer'
import {Request, Response} from 'express'
import transporter from '../config/smtp'


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
        const emailInfo = {
            text: 'Você ganhou na loteria!',
            from: 'thyago.anjos@orcestra.com.br',
            to: 'mauricio.machado@orcestra.com.br',
            subject: 'Recuperação de Senha' 
        }
        const mailSent = await transporter.sendMail(emailInfo, (error, info) => {
            if (error) {
                return res.status(400).json({message: error})
            }
            return res.status(200).json({message: "Email enviado"})
        })
    }
}