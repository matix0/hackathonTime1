import { useState } from "react";
import { feedPost } from "../../services/feed";

const InputFeed = () => {
  const [text, setText] = useState("");
  const [id] = useState(localStorage.getItem("id"));
  const [name] = useState(localStorage.getItem("username"));

  const sendPost = async () => {
    if (text.length !== 0 && id && id.length !== 0) {
      const values = {
        text: text,
        userId: id,
        username: name,
      };

      const response = await feedPost(values);
      window.location.reload();
      return response;
    } else {
      return false;
    }
  };

  return (
    <div className="inputBox">
      <div className="inputUsernameBox">{name}</div>
      <textarea
        maxLength={232}
        rows={4}
        className="inputField"
        placeholder="Escreva aqui.."
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button className="sendBtn" onClick={() => sendPost()}>
        POSTAR
      </button>
    </div>
  );
};

export default InputFeed;
