// import orcjump from "../../assets/orcjump.png";
import {useEffect,useState} from "react";
import {useHistory} from 'react-router-dom'
import { getUserById } from "../../services/users";

import "./style.css"
import logOut from "../../assets/log-out.svg";
import home from "../../assets/home.svg";
import userProfile from "../../assets/user_profile_temp.svg";

function ProfilePage() {
    const history = useHistory()
    const id = localStorage.getItem('id')

    const [name,setName] = useState<string>()
    const [username,setUserName] = useState<string>()
    const [nameInfo,setNameInfo] = useState<string>()
    const [email,setEmail] = useState<string>()


    const separateString = (value: string) => {
        value = value.replaceAll(" ", "\n")
        return value
    }

    const handleProfileInfo = async () => {
        const response = await getUserById(id as string)
        const finalName = response?.data.name
        setNameInfo(finalName)
        setEmail(response?.data.email)
        setName(separateString(finalName));
        setUserName(response?.data.username)
    }

    const goHome = () => {
        history.push('/')
    }

    const handleLogout = () => {
        localStorage.clear();
        history.push('/login')
    }

    useEffect (() => { 
        handleProfileInfo();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);

    return (
        <div className="content">
            <div className="lateralBar">
                <div className="infoBox">
                    <div className="nameBox">
                        {name}
                        <br/>
                        <br />
                        {username}
                      </div>
                    </div>
                    <div className="optionsBox">
                      <div className="svgBtn" onClick={() => {goHome()}}>
                        <img src={home} alt="home"/>
                        <p>Home</p>
                      </div>
                      <div className="svgBtn profile">
                        <img src={userProfile} alt="home"/>
                        <p>Perfil</p>
                      </div>
                      <div className="svgBtn logout"  onClick={() => {handleLogout()}}>
                        <img src={logOut} alt="logout"/>
                        <p>Sair</p>
                    </div>
                </div>
            </div>

            <div className="profile-content">
                <div className="profile-box">
                    <div className="header-perfil-content">
                        <div className="txt-title">
                            <h1>Informações do Perfil</h1>
                        </div>
                    </div>
                    <div className="see-info-content">
                        <div className="informations">
                            <h3>Nome</h3>
                            <p>{nameInfo}</p>
                        </div>
                        <div className="informations">
                            <h3>Username</h3>
                            <p>{username}</p>
                        </div>
                        <div className="informations">
                            <h3>Email</h3>
                            <p>{email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProfilePage;