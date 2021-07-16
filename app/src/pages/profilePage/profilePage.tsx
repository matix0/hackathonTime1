// import orcjump from "../../assets/orcjump.png";
import {useEffect,useState} from "react";
import {useHistory} from 'react-router-dom'
import { getUserById } from "../../services/users";
import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme, GlobalStyle} from '../../components/themes'
import { Content, ProfileBox } from "./styled";
import Switch from "react-switch";

import "./style.css"
import logOut from "../../assets/log-out.svg";
import home from "../../assets/home.svg";
import userProfile from "../../assets/user_profile_temp.svg";
import { LateralBar } from "../mainPage/styled";

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

    const [theme, setTheme] = useState('light');
    const [isDark, setIsDark] = useState(false);
    localStorage.setItem('theme', theme);

    const changeTheme = () => {
      setIsDark(!isDark);
      setTheme(isDark ? 'dark' : 'light');
    };

    useEffect (() => { 
        handleProfileInfo();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);




    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
            <Content>
                <LateralBar >
                    <div className="infoBox">
                        <div className="nameBox">
                        {name}
                        <br/>
                        {username}
                        </div>
                    </div>
                    <div className="optionsBox">
                        <div className="svgBtn">
                            <Switch 
                                onChange={() => {changeTheme()}} 
                                checked={theme==='dark'}
                                uncheckedIcon
                            />
                        </div>
                        <div className="svgBtn" onClick={() => {goHome()}}>
                            <img src={home} alt="home"/>
                            <p>Home</p>
                        </div>
                        <div className="svgBtn profile">
                            <img src={userProfile} alt="home"/>
                            <p>Perfil</p>
                        </div>
                        <div className="svgBtn logout" onClick={() => {handleLogout()}}>
                            <img src={logOut} alt="logout"/>
                            <p>Sair</p>
                        </div>
                    </div>
                </LateralBar>

                <div className="profile-content">
                    <ProfileBox>
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
                    </ProfileBox>
                </div>
            </Content>
        </ThemeProvider>
    )

}

export default ProfilePage;