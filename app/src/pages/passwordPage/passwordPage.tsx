import {Link} from 'react-router-dom'
import { useState } from 'react'
import { RegisterBox } from "../../components/registerBox";
import orcjump from "../../assets/orcjump.png"
import { postEmailUser } from '../../services/users';
import "./style.css"


function PasswordPage() {

    const [email, setEmail] = useState<string>()
    const [errorMail, setErrors] = useState<string>();
    const [errorInfo, setErrorInfo] = useState<string>();
    const [message, setMessage] = useState<string>();
    const values = {email}

    const handleForgotPassword = async () => {
        let error = {
            email: ''
        }
        try {
            setErrorInfo('')
            setErrors('')
            if (!email) { 
                error.email = 'Email é necessário'
                return setErrors(error.email)
            }
            setErrors('Checando seu email')
            await postEmailUser(values)
            return setMessage("Email de recuperação de senha foi enviado para seu email")
        } catch (error) {
            setErrors('')
            return setErrorInfo(error.message)
        }   
    }

    return (
        <div className="content">
            <RegisterBox>
                    <div className="orcjump">
                        <img src={orcjump} alt="Orc saltando" />
                    </div>
                    <div className="title-content">
                        <h1>Esqueceu a senha?</h1>
                    </div>
                    <div>
                        <p className="info-text">Digite seu email para que possamos te ajudar!</p>
                    </div>
                    <div className="input-content">
                            <input
                                type="email"
                                placeholder="Email" 
                                onChange={(e) => {setEmail(e.target.value)}}
                            />
                            {errorInfo && <p className="error-text">{errorInfo}</p>}
                            {errorMail && <p className="error-text">{errorMail}</p>}
                    </div>
                    {message && <p className="error-text">{message}</p>}
                    <button onClick={() => {handleForgotPassword()}}>Pronto!</button>
                    <div className="link-content">
                        <Link to="/login">Voltar para tela de login</Link>
                    </div>
            </RegisterBox>
        </div>
    )   
}

export default PasswordPage;