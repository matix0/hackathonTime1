import {Link, useHistory} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { RegisterBox } from "../../components/registerBox"
import orcjump from "../../assets/orcjump.png"
import "./style.css"
import { postUserLogin } from '../../services/users'

function LoginPage() {
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [error, setError] = useState<string>()
    const history = useHistory()

    const handleLogin = async () => {
        try {
            const values = {email, password}
            const response = await postUserLogin(values)

            // set id token in localStorage
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('id', response.data.result._id)
            if(localStorage.getItem('token')) {
                history.push("/")    
            }
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

    useEffect (() => {
        if(localStorage.getItem('token')) {
            history.push('/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[history]);
    

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
                        <Link to="/password">Esqueci minha senha</Link>
                        <br />
                        <Link  to="/register">Preciso criar uma conta</Link>
                    </div>
                </RegisterBox>
            </div>
    )
}

export default LoginPage;