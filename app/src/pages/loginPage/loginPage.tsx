import {Link} from 'react-router-dom'

import { RegisterBox } from "../../components/registerBox"
import orcjump from "../../assets/orcjump.png"
import "./style.css"


function loginPage() {
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
                        <div className="input-content">
                            <input
                                type="email"
                                placeholder="Email" 
                            />
                            <input 
                                type="password"
                                placeholder="Senha"                                
                            />
                        </div>
                    </form>
                    <button>Entrar</button>

                    <div className="link-content">
                    <Link to="/login">Esqueci minha senha</Link>
                    <br />
                    <Link  to="/register">Preciso criar uma conta</Link>
                    </div>
                </RegisterBox>
            </div>
    )
}

export default loginPage;