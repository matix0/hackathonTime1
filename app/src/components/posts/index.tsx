import { useState } from "react";
import likePost from "../../services/like";

import { FeedBox } from "./styled";
import heart from "../../assets/heart.svg";
import fullHeart from "../../assets/fullHeart.svg";
import "./style.css";

interface PostProps {
  username: string;
  text: string;
}

const PostBox = ({ username, text }: PostProps) => {
  const [postId] = useState(localStorage.getItem("postId"));
  const [userId] = useState(localStorage.getItem("userId"));
  const [likeId, setId] = useState(localStorage.getItem("id"));
  const sendLike = async () => {
    if (postId?.length !== 0 && userId?.length !== 0) {
      console.log(localStorage.getItem("postId"));
      console.log(localStorage.getItem("userId"));

      //   const likeValue = {
      //     postId: postId,
      //     userId: userId,
      //     likeId: likeId,
      //   };

      const response: any = await sendLike();
      return response;
    } else {
      return false;
    }
  };
  const [heartImg, setHeart] = useState(heart);

  const changeHeartColor = () => {
    heartImg === heart ? setHeart(fullHeart) : setHeart(heart);
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
