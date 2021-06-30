import { RegisterBox } from '../../components/registerBox'
import './style.css'

export function RegisterPage(){
    return (

        // main div
        <div className='content'>

            {/* exported component box */}
            <RegisterBox>

                {/* page title */}
                <div className='title-content'>
                    <h1>Cadastr'orc</h1>
                </div>
                
                {/* form with all inputs and types */}
                <form>
                    <input type="text" placeholder="Nome"/>
                    <input type="text"  placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Senha"/>
                    <input type="password" placeholder="Confirmar Senha"/>
                    

                    {/* register button where will have connection with back */}
                    <button>
                        Cadastrar
                    </button>

                </form>


                {/* link to login page */}
                <div className="link-content">
                    <a href="/">Uau, esqueci que já tenho uma conta :P</a>
                </div>
                
            </RegisterBox>
        </div>
    )
}