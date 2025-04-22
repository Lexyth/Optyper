import { useRef, useCallback, useState } from "react";

import { KeyInfoList } from "./components/KeyInfoList/react";
import { TextRegion } from "./components/TextRegion/react";
import { TypingRegion } from "./components/TypingRegion/react";

const KEYS_DATA = {
  Enter: { speed: 1, accuracy: 0.8 },
  Dead: { speed: 1, accuracy: 0.8 },
  Delete: { speed: 1, accuracy: 0.8 },

  // ascii symbols
  // skipping index 0 to 7
  Backspace: { speed: 1, accuracy: 0.8 },
  Tab: { speed: 1, accuracy: 0.8 },
  // skipping index 10 to 31
  " ": { speed: 1, accuracy: 0.8 },
  "!": { speed: 1, accuracy: 0.8 },
  '"': { speed: 1, accuracy: 0.8 },
  "#": { speed: 1, accuracy: 0.8 },
  $: { speed: 1, accuracy: 0.8 },
  "%": { speed: 1, accuracy: 0.8 },
  "&": { speed: 1, accuracy: 0.8 },
  "´": { speed: 1, accuracy: 0.8 },
  "(": { speed: 1, accuracy: 0.8 },
  ")": { speed: 1, accuracy: 0.8 },
  "*": { speed: 1, accuracy: 0.8 },
  "+": { speed: 1, accuracy: 0.8 },
  ",": { speed: 1, accuracy: 0.8 },
  "–": { speed: 1, accuracy: 0.8 },
  ".": { speed: 1, accuracy: 0.8 },
  "/": { speed: 1, accuracy: 0.8 },
  "0": { speed: 1, accuracy: 0.8 },
  "1": { speed: 1, accuracy: 0.8 },
  "2": { speed: 1, accuracy: 0.8 },
  "3": { speed: 1, accuracy: 0.8 },
  "4": { speed: 1, accuracy: 0.8 },
  "5": { speed: 1, accuracy: 0.8 },
  "6": { speed: 1, accuracy: 0.8 },
  "7": { speed: 1, accuracy: 0.8 },
  "8": { speed: 1, accuracy: 0.8 },
  "9": { speed: 1, accuracy: 0.8 },
  ":": { speed: 1, accuracy: 0.8 },
  ";": { speed: 1, accuracy: 0.8 },
  "<": { speed: 1, accuracy: 0.8 },
  "=": { speed: 1, accuracy: 0.8 },
  ">": { speed: 1, accuracy: 0.8 },
  "?": { speed: 1, accuracy: 0.8 },
  "@": { speed: 1, accuracy: 0.8 },
  // skipping index 65 to 90 (A-Z)
  "[": { speed: 1, accuracy: 0.8 },
  "\\": { speed: 1, accuracy: 0.8 },
  "]": { speed: 1, accuracy: 0.8 },
  "^": { speed: 1, accuracy: 0.8 },
  _: { speed: 1, accuracy: 0.8 },
  "`": { speed: 1, accuracy: 0.8 },
  a: { speed: 1, accuracy: 0.8 },
  b: { speed: 1, accuracy: 0.8 },
  c: { speed: 1, accuracy: 0.8 },
  d: { speed: 1, accuracy: 0.8 },
  e: { speed: 1, accuracy: 0.8 },
  f: { speed: 1, accuracy: 0.8 },
  g: { speed: 1, accuracy: 0.8 },
  h: { speed: 1, accuracy: 0.8 },
  i: { speed: 1, accuracy: 0.8 },
  j: { speed: 1, accuracy: 0.8 },
  k: { speed: 1, accuracy: 0.8 },
  l: { speed: 1, accuracy: 0.8 },
  m: { speed: 1, accuracy: 0.8 },
  n: { speed: 1, accuracy: 0.8 },
  o: { speed: 1, accuracy: 0.8 },
  p: { speed: 1, accuracy: 0.8 },
  q: { speed: 1, accuracy: 0.8 },
  r: { speed: 1, accuracy: 0.8 },
  s: { speed: 1, accuracy: 0.8 },
  t: { speed: 1, accuracy: 0.8 },
  u: { speed: 1, accuracy: 0.8 },
  v: { speed: 1, accuracy: 0.8 },
  w: { speed: 1, accuracy: 0.8 },
  x: { speed: 1, accuracy: 0.8 },
  y: { speed: 1, accuracy: 0.8 },
  z: { speed: 1, accuracy: 0.8 },
  "{": { speed: 1, accuracy: 0.8 },
  "|": { speed: 1, accuracy: 0.8 },
  "}": { speed: 1, accuracy: 0.8 },
  "~": { speed: 1, accuracy: 0.8 },
  DEL: { speed: 1, accuracy: 0.8 },
  // skipping index 128 to 255
};

const TEXT = "This is a test text, with some special characters.";

function App() {
  const typingRegion: React.RefObject<HTMLDivElement> = useRef(null);
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter") {
        typingRegion.current?.focus();
        console.log(typingRegion.current);
      }
      event.preventDefault();
    },
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const lastRightAt = useRef(0);

  const handleKeyTyped = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key == TEXT[currentIndex]) {
        console.log("correct key typed", event.key);
        const time = new Date().getTime();
        console.log(time - lastRightAt.current);
        lastRightAt.current = time;
        setCurrentIndex(currentIndex + 1);
      } else {
        console.log("wrong key typed", event.key);
      }
    },
    [currentIndex]
  );

  return (
    <div
      className="flex flex-col bg-slate-100 h-screen"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <h1 className="m-4 text-3xl font-bold underline">
        Optimize your typing.
      </h1>
      <KeyInfoList keys_data={KEYS_DATA}></KeyInfoList>
      <TextRegion
        text={TEXT}
        currentIndex={currentIndex}
      ></TextRegion>
      <TypingRegion
        ref={typingRegion}
        className="m-4 p-4 bg-slate-900"
        onKeyTyped={handleKeyTyped}
      ></TypingRegion>
    </div>
  );
}

export default App;
