import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import { FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS } from "./Constants";

export default function Container() {
  const [text, setText] = useState("");

  const numberOfCharacters = text.length;
  // const numberOfWords = text.split(" ").length;
  const numberOfWords = text
    .trim()
    .split(/\s+/)
    .filter((word) => word !== "").length;
  const numberOfInstagramCharacters = INSTAGRAM_MAX_CHARACTERS - text.length;
  const numberOfFacebookCharacters = FACEBOOK_MAX_CHARACTERS - text.length;
  const stats_props = {
    numberOfCharacters,
    numberOfWords,
    numberOfInstagramCharacters,
    numberOfFacebookCharacters,
  };
  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats_props={stats_props} />
    </main>
  );
}
