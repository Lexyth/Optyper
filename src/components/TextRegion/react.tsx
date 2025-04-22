import { useMemo } from "react";

// TODO: insert wrong key into text when mistyped to simulate having to delete the symbol.

export function TextRegion({
  text,
  currentIndex,
}: {
  text: string;
  currentIndex: number;
}): JSX.Element {
  const old = useMemo(() => ({ color: "black" }), []);
  const current = useMemo(() => ({ color: "red" }), []);
  const next = useMemo(() => ({ color: "grey" }), []);

  return (
    <div>
      {text.split("").map((char, index) => {
        return (
          <span
            key={index}
            style={
              index === currentIndex
                ? current
                : index < currentIndex
                ? old
                : next
            }
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}
