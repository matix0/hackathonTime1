import {Link} from 'react-router-dom'

import { RegisterBox } from "../../components/registerBox";
import orcjump from "../../assets/orcjump.png"

function PasswordPage() {
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
                        <p>Digite seu email para que possamos te ajudar!</p>
                    </div>
                    <div className="input-content">
                            <input
                                type="email"
                                placeholder="Email" 
                                //onChange={(e) => {setEmail(e.target.value)}}
                            />
                    </div>
                    <button>Pronto!</button>
                    <div className="link-content">
                        <Link to="/login">Voltar para tela de login</Link>
                    </div>
            </RegisterBox>
        </div>
    )   
}

export default PasswordPage;