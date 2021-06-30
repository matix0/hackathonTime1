import React from "react";
import "./mainPage.css";

const MainPage = () => {
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
            <textarea
              className="inputField"
              placeholder="Escreva aqui.."
            ></textarea>
            <button className="sendBtn">POSTAR</button>
          </div>
          <div className="feedBox">Cagar de jaqueta é horrivel!!!</div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
