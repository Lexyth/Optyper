import { KeyInfo } from "../KeyInfo/react";

import { type Key, isKey } from "../../types/Key";

export function KeyInfoList({
  keys_data,
  target_speed,
}: {
  keys_data?: Partial<Record<Key, { speed: number; accuracy: number }>>;
  target_speed?: number;
}) : JSX.Element {
  const key_info_list: JSX.Element[] = [];

  for (const [key, value] of Object.entries(keys_data ?? {})) {
    if (!isKey(key)) continue;
    key_info_list.push(
      <KeyInfo
        key={key}
        keyboardKey={key}
        speed={value.speed}
        target_speed={target_speed ?? 0}
        accuracy={value.accuracy}
      ></KeyInfo>
    );
  }

  return (
    // make tailwind display the keyinfolist as a row
    <div className="flex flex-row backdrop:to-blue-100">{key_info_list}</div>
  );
}
