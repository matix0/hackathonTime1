import {Link} from 'react-router-dom'
import { useState } from 'react'

import { RegisterBox } from "../../components/registerBox"
import orcjump from "../../assets/orcjump.png"
import "./style.css"
import { postUserLogin } from '../../services/users'


function LoginPage() {
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [error, setError] = useState<string>()

    const handleLogin = async () => {
        try {
            const values = {email, password}
            await postUserLogin(values)
            console.log('login realizado com sucesso')
            setError('')
        } catch (err) {
            console.log(err.message)
            if(!email || !password) {
                setError('Preencha os campos abaixo')
            } else {
                setError(err.message)
            }
        }
    }

    return (
            <div className="content">
                <RegisterBox>
                    <div className="title-content">
                        <h1>Login Page</h1>
                    </div>
                    <div className="orcjump">
                        <img src={orcjump} alt="Orc saltando" />
                    </div>
                    <form>
                        <div>
                            {error && <p className="error-text">{error}</p>}
                        </div>
                        <div className="input-content">
                            <input
                                type="email"
                                placeholder="Email" 
                                onChange={(e) => {setEmail(e.target.value)}}
                            />
                            <input 
                                type="password"
                                placeholder="Senha"
                                onChange={(e) => {setPassword(e.target.value)}}
                            />
                        </div>
                    </form>
                    <button type="button" onClick={handleLogin}>Entrar</button>

                    <div className="link-content">
                    <Link to="/login">Esqueci minha senha</Link>
                    <br />
                    <Link  to="/register">Preciso criar uma conta</Link>
                    </div>
                </RegisterBox>
            </div>
    )
}

export default LoginPage;