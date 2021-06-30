import { RegisterBox } from '../../components/registerBox'
import { useCallback, useEffect, useState } from 'react'
import { getUser, postUser } from '../../services/users'
import './style.css'


export function RegisterPage(){

    // setting registration information
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();
    const [user, setUser] = useState<any[]>();
    
    const handleUser = async () => {
        const values = {
            name: name,
            username: username,
            email: email,
            password: password
        };

        await postUser(values);
    }


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
                    <div className='input-content'>
                        <input 
                            type="text" 
                            placeholder="Nome" 
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <input 
                            type="text"  
                            placeholder="Username"
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                        <input 
                            type="email" 
                            placeholder="Email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <input 
                            type="password" 
                            placeholder="Senha" 
                            onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                        />
                        <input 
                            type="password" 
                            placeholder="Confirmar Senha"
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                        />
                    </div>
                
                    {/* register button where will have connection with back */}
                    <button 
                        type="button" 
                        onClick={handleUser}
                    >
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