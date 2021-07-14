import { useState } from "react";
import { postLike } from "../../services/like";

import heart from "../../assets/heart.svg";
import fullHeart from "../../assets/fullHeart.svg";
import "./style.css";

interface PostProps {
  username: string;
  text: string;
  postId: string;
}

const PostBox = ({ username, text, postId }: PostProps) => {
  const [userId] = useState(localStorage.getItem("id"));
  const sendLike = async () => {
    if (postId?.length !== 0 && userId?.length !== 0) {
      const response: any = await sendLike();
      return response;
    } else {
      return false;
    }
  };
  const [heartImg, setHeart] = useState(heart);

  const changeHeartColor = async () => {
    heartImg === heart ? setHeart(fullHeart) : setHeart(heart);
    const values = {
      userId,
      postId,
    };
    try {
      await postLike(values);
    } catch (error) {
      console.log(error.message);
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
