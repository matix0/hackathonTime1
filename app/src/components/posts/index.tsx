import { useState, useEffect } from "react";
import { postLike } from "../../services/like";

import { FeedBox } from "./styled";
import heart from "../../assets/heart.svg";
import fullHeart from "../../assets/fullHeart.svg";
import "./style.css";

interface PostProps {
  username: string;
  text: string;
  postId: string;
  liked?:boolean;
}

const PostBox = ({ username, text, postId, liked }: PostProps) => {
  const [userId] = useState(localStorage.getItem("id"));
  const [heartImg, setHeart] = useState(heart);

  useEffect(() => {
    console.log(liked);
    
    if(liked && liked === true){
      setHeart(fullHeart)
    }
  })

  const sendLike = async () => {
    if (postId?.length !== 0 && userId?.length !== 0) {
      const response: any = await sendLike();
      return response;
    } else {
      return false;
    }
  };

  const changeHeartColor = async () => {
    if (heartImg === heart) {
      setHeart(fullHeart);
      const values = {
        userId,
        postId,
      };
      try {
        await postLike(values);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="feedBox">
      <div className="feedUsernameBox">{username}</div>
      <div className="feedTextBox">{text}</div>
      <img
        id="likeBtn"
        src={heartImg}
        alt="heart"
        onClick={(e) => {
          changeHeartColor();
        }}
      />
    </div>
  );
};

export default PostBox;
