import { useState } from "react";
import Warning from "./Warning";
// import Stats from "./Stats";

// eslint-disable-next-line react/prop-types
export default function Textarea({ text, setText }) {
  // const [showWarnings, setShowWarnings] = useState(false);
  const [warningText, setWarningText] = useState("");

  const handleOnChnage = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setWarningText("no sript tag allowed");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("no @ allowed");
      newText = newText.replace("@", "");
    } else {
      setWarningText("");
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleOnChnage}
        className="textarea"
        placeholder="Enter your text here"
        spellCheck="False"
      />
      {/* {showWarnings ? <Warning warningText={warningText} /> : null} */}
      {warningText ? <Warning warningText={warningText} /> : ""}
      {/* <Stats numberOfCharacters={numberOfCharacters} /> */}
    </div>
  );
}
