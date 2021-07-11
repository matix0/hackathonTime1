import logOut from "../../assets/log-out.svg";
import home from "../../assets/home.svg";

const LateralBar = () => {
  const logout = async () => {
    localStorage.clear();
    window.location.reload();
  };

  const reload = async () => {
    window.location.reload();
  };

  return (
    <div className="menuButtonsBox">
      <div className="homeButton">
        <img src={home} alt="home" onClick={() => reload()} />
        <p>Home</p>
      </div>
      <div className="logoutButton">
        <img src={logOut} alt="logout" onClick={() => logout()} />
        <p>Sair</p>
      </div>
    </div>
  );
};

export default LateralBar;
