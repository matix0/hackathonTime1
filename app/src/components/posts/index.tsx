import {useState} from "react";

import { FeedBox } from "./styled";
import heart from "../../assets/heart.svg";
import fullHeart from "../../assets/fullHeart.svg";
import "./style.css";

interface PostProps{
    username:string,
    text:string
}


const PostBox = ({username, text}: PostProps) => {
    const [heartImg,setHeart] = useState(heart);

    const changeHeartColor = () => {        
        (heartImg === heart)?setHeart(fullHeart):setHeart(heart);
      };

    return(
        <FeedBox>
            <div className="feedUsernameBox">{username}</div>
            <div className="feedTextBox">{text}</div>
            <img id="likeBtn" src={heartImg} alt="heart" onClick={(e)=> {changeHeartColor()}}/>
        </FeedBox>
    );
};

export default PostBox;