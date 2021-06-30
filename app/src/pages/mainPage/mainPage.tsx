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

      <div className="postBox">
        <div className="inputBox">Escreva aqui</div>
      </div>
    </div>
  );
};
export default MainPage;
