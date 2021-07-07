import { RegisterBox } from "../../components/registerBox";
import orcjump from "../../assets/orcjump.png"
import { useEffect, useState } from "react";
import { getUserById } from "../../services/users";
import { useParams } from "react-router-dom";

function RecoveryPage(){
    const params = useParams<{id: string}>()

    
    const [name, setName] =  useState<string>()

    const handleUserById = async () => {
        const response = await getUserById(params.id)
        setName(response?.data.name)
    }        


    useEffect (() => {
        handleUserById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

    return(
        <div className="content">
            <RegisterBox>
                    <div className="orcjump">
                        <img src={orcjump} alt="Orc saltando" />
                    </div>
                    <div className="title-content">
                        <h1>Olá, {name}</h1> 
                    </div>
                    <div className="input-content">
                            <input
                                type="password"
                                placeholder="Nova senha" 
                                //onChange={(e) => {setEmail(e.target.value)}}
                            />
                            <input
                                type="password"
                                placeholder="Confirma sua nova senha" 
                                //onChange={(e) => {setEmail(e.target.value)}}
                            />
                    </div>
                    <button>Redefinir Senha!</button>
            </RegisterBox>
        </div>
    )
}

export default RecoveryPage;