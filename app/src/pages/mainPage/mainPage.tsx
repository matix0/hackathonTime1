import React, { useEffect, useState } from "react";
import PostBox from "../../components/posts";
import {feedPost,getFeed} from "../../services/feed";
import InputFeed from "../../components/inputFeed";

import logOut from "../../assets/log-out.svg";
import home from "../../assets/home.svg";
import "./style.css";

interface IFeed {
  text: string;
  userId: { username: string };
  creationDate: string;
  _id: string;
}

const MainPage = () => {
  const [name, setName] = useState("nome sobrenome sobresobrenome");
  const [feed, setFeed] = useState<IFeed[]>([
    {
      text: "",
      userId: { username: "" },
      creationDate: "",
      _id: "",
    },
  ]);

  const changeName = () => {
    const finalName = name.replaceAll(" ", "\n");
    setName(finalName);
  };

  useEffect(() => {
    getFeedData();
    changeName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFeedData = async () => {
    const response = await getFeed();
    setFeed(response.feed);
  };

  return (
    <div className="container">
      <div className="lateralBar">
        <div className="infoBox">
          <div className="nameBox">
            {name}
            <br />
            <br />
            3132132s1da3sd456
          </div>
        </div>
        <div className="optionsBox">
          <div className="svgBtn">
            <img src={home} alt="home" />
            <p>Home</p>
          </div>
          <div className="svgBtn">
            <img src={logOut} alt="logout" />
            <p>Sair</p>
          </div>
        </div>
      </div>

      <div>
        <div className="postBox">
          <InputFeed />
          <div className="scrollBox">
            {feed.length !== 0 &&
              feed.map((feedPost) => (
                <PostBox
                  username={feedPost.userId.username}
                  text={feedPost.text}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
