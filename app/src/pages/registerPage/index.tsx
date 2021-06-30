import { RegisterBox } from '../../components/registerBox'
import {useState, useEffect} from 'react'
import {getUser} from '../../services/users'
import './style.css'
import React from 'react';

export function RegisterPage(){

    const [user, setUser] = useState<any[]>();

    const handleUsers = async () => {
        const response = await getUser();
        setUser(response?.data);
    }

    useEffect(() => {
        handleUsers();
    }, []);


    console.log(user);
    return (

        // main div
        <div className='content'>

            {/* exported component box */}
            <RegisterBox>

                {/* page title */}
                <div className='title-content'>
                    <h1>Cadastr'orc</h1>
                </div>

                {/* {user?.map((u:any, index:any) => {
                    return <p>
                        {u._id}
                    </p>
                })} */}

                {/* form with all inputs and types */}
                <form>
                    <div className='input-content'>
                        <input type="text" placeholder="Nome" />
                        <input type="text"  placeholder="Username"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Senha"/>
                        <input type="password" placeholder="Confirmar Senha"/>
                    </div>
                
                    {/* register button where will have connection with back */}
                    <button type="submit">
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