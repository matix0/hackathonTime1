import { RegisterBox } from '../../components/registerBox'
import { useState } from 'react'
import { postUser } from '../../services/users'
import orcSom from '../../assets/orcsom2.png'
import './style.css'
export interface ErrorProps{
    name?: string,
    username?: string,
    email?: string,
    password?: string,
    confirmPassword?: string,
    emailDoesExist?: string,
    usernameDoesExist?: string
}
export interface UserTypes{
    name?: string,
    username?: string,
    email?: string,
    password?: string,
    confirmPassword?: string
}


export function RegisterPage(){

    // setting registration information
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();
    const [errors, setErrors] = useState<ErrorProps>();

    const handleUser = async () => {
        const values = {
            name: name,
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };

        await validateUser(values);
    }

    const validateUser = async (values: UserTypes) => {
        let errors = {
            name: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            emailDoesExist: '',
            usernameDoesExist: ''
        }

        if(!name?.trim()) {
            errors.name = "Nome é necessário"
        }

        if(!username?.trim()) {
            errors.username = "Username é necessário"
        }

        if (!email) {
            errors.email = 'Email é necessário';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Endereço de email inválido';
        }

        if (!password) {
            errors.password = 'Senha necessária';
        } else if (password.length < 6) {
            errors.password = 'Senha precisa ter 6 ou mais caracteres';
        }

        if (!confirmPassword) {
            errors.confirmPassword = 'Senha necessária';
        } else if (confirmPassword !== password) {
            errors.confirmPassword = 'Senhas não estão idênticas';
        }

        if(confirmPassword === password && password?.length && email && username && name) {
            //Use postUser when need to test if the system register the registration
            try {
                await postUser(values);
            } catch (error) {
                if(error.message === 'email já existe'){
                    errors.emailDoesExist = 'Email já está sendo utilizado'
                } else if(error.message === 'Username já existe') {
                    errors.usernameDoesExist = 'Username já está sendo utilizado'
                }
                setErrors(errors)
            }
        } else {
            setErrors(errors);
        }


        return errors;
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
                        {errors?.name && <p className="error-text">{errors.name}</p>}
                        <input 
                            type="text"  
                            placeholder="Username"
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                        {errors?.username && <p className="error-text">{errors.username}</p>}
                        {errors?.usernameDoesExist && <p className="error-text">{errors.usernameDoesExist}</p>}
                        <input 
                            type="email" 
                            placeholder="Email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        {errors?.email && <p className="error-text">{errors.email}</p>}
                        {errors?.emailDoesExist && <p className="error-text">{errors.emailDoesExist}</p>}
                        <input 
                            type="password" 
                            placeholder="Senha" 
                            onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                        />
                        {errors?.password && <p className="error-text">{errors.password}</p>}
                        <input 
                            type="password" 
                            placeholder="Confirmar Senha"
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                        />
                        {errors?.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
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