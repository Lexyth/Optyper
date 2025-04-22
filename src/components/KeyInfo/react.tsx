import React from "react";

import { KeyInfoTooltip } from "../KeyInfoTooltip/react";

import type { Key } from "../../types/Key";

export function KeyInfo({
  keyboardKey,
  speed,
  target_speed,
  accuracy,
}: {
  keyboardKey: Key;
  speed?: number;
  target_speed?: number;
  accuracy?: number;
}): JSX.Element {
  const [shouldShowTooltip, setShouldShowTooltip] = React.useState(false);

  const handleMouseOver = React.useCallback((): void => {
    setShouldShowTooltip(true);
  }, []);

  const handleMouseOut = React.useCallback((): void => {
    setShouldShowTooltip(false);
  }, []);

  return (
    // make tailwind only use a span
    <div
      className="inline-flex items-center justify-center p-2 gap-2 m-2 text-center text-slate-800 font-bold text-lg bg-slate-300 border border-slate-800"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {shouldShowTooltip && (
        <KeyInfoTooltip
          keyboardKey={keyboardKey}
          speed={speed ?? 0}
          target_speed={target_speed ?? 0}
          accuracy={accuracy ?? 0}
        ></KeyInfoTooltip>
      )}
      {keyboardKey}
    </div>
  );
}
