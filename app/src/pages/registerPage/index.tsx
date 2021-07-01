import { RegisterBox } from '../../components/registerBox'
import { useCallback, useEffect, useState } from 'react'
import { getUser, postUser } from '../../services/users'
import orcSom from '../../assets/orcsom2.png'
import './style.css'


export function RegisterPage(){

    // setting registration information
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();
    const [user, setUser] = useState<any[]>();
    const [errors, setErros] = useState<object>();

    
    const handleUser = async () => {
        const values = {
            name: name,
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };

        await validateUser();

        //await postUser(values);
    }

    const validateUser = async () => {
        let errors = {
            name: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        }

        if(!name?.trim()) {
            errors.name = "Name required"
        }

        if(!username?.trim()) {
            errors.username = "Username required"
        }

        if (!email) {
            errors.email = 'Email required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email address is invalid';
        }

        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            errors.password = 'Password needs to be 6 characters or more';
        }

        if (!confirmPassword) {
            errors.confirmPassword = 'Password is required';
        } else if (confirmPassword !== password) {
            errors.confirmPassword = 'Passwords do not match';
        }
        
        await setErros(errors);
        //return errors;
    }


    return (

        // main div
        <div className='content'>
            <div className="Orcheadset" >
                <img src={orcSom} alt="orc com headset" />
            </div>

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