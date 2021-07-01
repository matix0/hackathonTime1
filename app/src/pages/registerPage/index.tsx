import { RegisterBox } from '../../components/registerBox'
import { useCallback, useEffect, useState } from 'react'
import { getUser, postUser } from '../../services/users'
import orcSom from '../../assets/orcsom2.png'
import './style.css'
export interface ErrorProps{
    name?: string,
    username?: string,
    email?: string,
    password?: string,
    confirmPassword?: string
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
    const [user, setUser] = useState<any[]>();
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

        //await postUser(values);
    }

    const validateUser = async (values: UserTypes) => {
        const response = await getUser();

        //Use only during test
        console.log(response?.data);

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

        if(confirmPassword === password && password?.length && email && username && name) {
            await postUser(values);
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
                        <input 
                            type="email" 
                            placeholder="Email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        {errors?.email && <p className="error-text">{errors.email}</p>}
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