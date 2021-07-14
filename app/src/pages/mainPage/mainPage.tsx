import React, { useEffect, useState } from "react";
import PostBox from "../../components/posts";
import { useHistory } from "react-router-dom";
import { getUserById } from "../../services/users";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../../components/themes";
import { LateralBar, InputBox, InputField, PostBoxStyle } from "./styled";
import Switch from "react-switch";
import { feedPost, getFeed } from "../../services/feed";
import InputFeed from "../../components/inputFeed";
import logOut from "../../assets/log-out.svg";
import home from "../../assets/home.svg";
import userProfile from "../../assets/user_profile_temp.svg";
import "./style.css";

interface IFeed {
  text: string;
  userId: { username: string };
  creationDate: string;
  _id: string;
}

const MainPage = () => {
  const history = useHistory();
  const id = localStorage.getItem("id");

  const [name, setName] = useState<string>();
  const [username, setUserName] = useState<string>();
  const [feed, setFeed] = useState<IFeed[]>([
    {
      text: "",
      userId: { username: "" },
      creationDate: "",
      _id: "",
    },
  ]);

  const changeName = async () => {
    const response = await getUserById(id as string);
    let finalName = response?.data.name;
    const username = response?.data.username;
    finalName = finalName?.replaceAll(" ", "\n");
    setName(finalName);
    setUserName(username);
  };

  const getFeedData = async () => {
    const response = await getFeed();
    setFeed(response.feed);
  };

  const handleLogin = async () => {
    localStorage.clear();
    history.push("/login");
  };

  const goProfile = async () => {
    history.push("/profile");
  };

  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [isDark, setIsDark] = useState(false);
  localStorage.setItem("theme", theme!);

  const changeTheme = () => {
    setIsDark(!isDark);
    setTheme(isDark ? "dark" : "light");
  };

  useEffect(() => {
    getFeedData();
    changeName();
    try {
      localStorage.getItem("theme");
    } catch (error) {
      localStorage.setItem("theme", "light");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <LateralBar>
          <div className="infoBox">
            <div className="nameBox">
              {name}
              <br />
              {username}
            </div>
          </div>
          <div className="optionsBox">
            <Switch
              className="switch"
              onChange={() => {
                changeTheme();
              }}
              checked={theme === "dark"}
              uncheckedIcon
            />
            <div className="svgBtn">
              <img src={home} alt="home" />
              <p>Home</p>
            </div>
            <div
              className="svgBtn profile"
              onClick={() => {
                goProfile();
              }}
            >
              <img src={userProfile} alt="home" />
              <p>Perfil</p>
            </div>
            <div
              className="svgBtn logout"
              onClick={() => {
                handleLogin();
              }}
            >
              <img src={logOut} alt="logout" />
              <p>Sair</p>
            </div>
          </div>
        </LateralBar>

        <div>
          <div className="postBox">
            <InputFeed />
            <div className="scrollBox">
              {feed.length !== 0 &&
                feed.map((feedPost) => (
                  <PostBox
                    username={feedPost.userId.username}
                    text={feedPost.text}
                    postId={feedPost._id}
                  />
                ))}
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};
export default MainPage;
