import React,{useEffect,useState} from "react";
import axios from "axios";

import "./mainPage.css";

interface IFeed{
  text: string,
  username: string,
  creationDate: string
}

const MainPage = () => {
  
  const [feed,setFeed] = useState<IFeed[]>([{
    text:"",username:"",creationDate:""
  }]);

  useEffect (() => { 
    getFeed();
  },
  []);
  
  const getFeed = async()=>  {
    const response = await axios.get("http://localhost:3001/feed");
    console.log(response.data);
    setFeed(response.data.feed);
    

  };
  return (
    <div className="container">
      <div className="lateralBar">
        <div className="infoBox">
          <div className="nameBox">nome</div>
          <div className="userBox">user</div>
        </div>
        <div className="optionsBox">
          <div className="homeBtn">home</div>
          <div className="quitBtn">sair</div>
        </div>
      </div>

      <div className="feedField">
        <div className="postBox">
          <div className="inputBox">
            <div className="inputUsernameBox">Zequinha_gameplays</div>
            <textarea maxLength={232} rows={4} 
              className="inputField"
              placeholder="Escreva aqui.."
            ></textarea>
            <button className="sendBtn" onClick={(e)=> {console.log(feed)}}>POSTAR</button>
          </div>
          {feed && feed.map(feedPost =>(
            <div>
            <div className="feedBox">
            <div className="feedUsernameBox">Xampson</div>
            <div className="feedTextBox">{feedPost.text}</div>
            <button className="likeBtn"></button>
            </div>
          </div>
          ))
          }
        </div>
      </div>
    </div>
  );
};
export default MainPage;
