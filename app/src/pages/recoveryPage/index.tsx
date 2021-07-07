import { RegisterBox } from "../../components/registerBox";
import orcjump from "../../assets/orcjump.png"
import { useEffect, useState } from "react";
import { getUserById } from "../../services/users";
import { useHistory, useParams } from "react-router-dom";
import { changeUserById } from '../../services/users'


//types
export interface ErrorPasswordProps{
    password?: string,
    confirmPassword?: string,
}

export interface newPasswordTypes{
    password?: string,
    confirmPassword?: string
}


//password recovery function
function RecoveryPage(){

    //statements
    const params = useParams<{id: string}>()
    const [name, setName] =  useState<string>()
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();
    const [errors, setErrors] = useState<ErrorPasswordProps>();
    const history = useHistory()

    //get the route id
    const handleUserById = async () => {
        const response = await getUserById(params.id)
        setName(response?.data.name)
    }        

    //change the password
    const handleChangePassword = async () => {
        const values = {
            password: password,
            confirmPassword: confirmPassword
        };

        await validateNewPassword(values);
    }

    //validate new password
    const validateNewPassword = async (values: newPasswordTypes) => {
        let errors = {
            password: '',
            confirmPassword: '',
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

        if(confirmPassword === password && password?.length) {
            //Use changeUeBId when need to test if the system register the registration
            const {confirmPassword, ...rest} = values;
            try {
                await changeUserById(params.id, rest);
                history.push('/login');
            } catch (error) {
                setErrors(errors)
                console.log(error)
            }
        } else {
            setErrors(errors);
        }


        return errors;
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
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                            {errors?.password && <p className="error-text">{errors.password}</p>}
                            <input
                                type="password"
                                placeholder="Confirma sua nova senha"
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                }} 
                            />
                            {errors?.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
                    </div>
                    <button onClick={handleChangePassword}>Redefinir Senha!</button>
            </RegisterBox>
        </div>
    )
}

export default RecoveryPage;