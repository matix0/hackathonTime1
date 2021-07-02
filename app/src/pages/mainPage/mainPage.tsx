import React,{useEffect,useState} from "react";
import axios from "axios";

import logOut from "../../assets/log-out.svg";
import home from "../../assets/home.svg";
import "./mainPage.css";

interface IFeed{
  text: string,
  userId: { username: string},
  creationDate: string,
  _id: string
}

const MainPage = () => {
  
  const [feed,setFeed] = useState<IFeed[]>([{
    text:"",userId:{username:""},creationDate:"",_id:""
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
          <div className="svgBtn">
          <img src={home} alt="home"/>
            <p>home</p></div>
          <div className="svgBtn">
            <img src={logOut} alt="logout"/>
            <p>sair</p>
            </div>
        </div>
      </div>

      <div >
        <div className="postBox">
          <div className="inputBox">
            <div className="inputUsernameBox">Zequinha_gameplays</div>
            <textarea maxLength={232} rows={4} 
              className="inputField"
              placeholder="Escreva aqui.."
            ></textarea>
            <button className="sendBtn" onClick={(e)=> {console.log("asdasd")
            }}>POSTAR</button>
          </div>
          <div className="scrollBox">
          {feed && feed.map(feedPost =>(
            <div className="feedBox" key={feedPost._id}>
            <div className="feedUsernameBox">{feedPost.userId.username}</div>
            <div className="feedTextBox">{feedPost.text}</div>
            <button className="likeBtn" onClick={(e)=> {console.log(feedPost)
            }}></button>
            </div>
          ))
        }
        </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
