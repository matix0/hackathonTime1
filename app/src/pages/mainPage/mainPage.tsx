import React, { useEffect, useState } from "react";
import PostBox from "../../components/posts";
import { getFeed } from "../../services/feed";
import InputFeed from "../../components/inputFeed";
//import api from "../../services/api";
import LateralBar from "../../components/lateralBar";

import "./style.css";

interface IFeed {
  text: string;
  userId: { username: string };
  creationDate: string;
  _id: string;
  liked: boolean;
}
interface ILikes {
  userId: string;
  postId: string;
  _id: string;
}

const MainPage = () => {
  const [name, setName] = useState("nome sobrenome sobresobrenome");
  const [id] = useState(localStorage.getItem("id"));
  const [feed, setFeed] = useState<IFeed[]>([
    {
      text: "",
      userId: { username: "" },
      creationDate: "",
      _id: "",
      liked: false,
    },
  ]);
  const [likes, setLikes] = useState<ILikes[]>([
    {
      userId: "",
      postId: "",
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

  const loadLikePosts = (feedList:any, likeList:any ) => {
    const likedFeed = feedList.filter((element: any) => {
       const temp =likeList.map((likeElement:any)=>{
        if(likeElement.postId === element._id){
           element.liked = true;
          }
          return element; 
      })
      return temp
    });
    setFeed(likedFeed);
  };

  const getFeedData = async () => {
    const response = await getFeed();
    const userLikes = response.likes.filter((like: any) => {
      if (like.userId === id) {
        return like;
      }
    });
    setLikes(userLikes);
    loadLikePosts(response.feed,userLikes);
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
          <LateralBar />
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
                  postId={feedPost._id}
                  liked={feedPost.liked}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
