import { type Key } from "../../types/Key";

export function KeyInfoTooltip({
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
  return (
    // make tailwind only use a span
    <div className="absolute flex flex-col border bg-slate-100 m-2 p-2">
      <span className="font-bold text-lg text-slate-800 bg-slate-300">
        {keyboardKey}
      </span>
      <span>Current Speed: {speed}</span>
      <span>Target Speed: {target_speed}</span>
      <span>Accuracy: {accuracy}</span>
    </div>
  );
}
