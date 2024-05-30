"use client";

import { useDictionary } from "@/context-provider/dictionary";
import Divider from "../../divider/divider";

export default function Skills() {
  const { main } = useDictionary();

  return (
    <div className="mb-2">
      <h3>{main.skills.title}</h3>
      <Divider />
      <h4 className="mb-2">{main.skills.subtitle}</h4>
      <div className="grid grid-cols-3">
        {main.skills.text.map((text: any[], i: number) => (
          <ul key={i}>
            {text.map((item: any, j: number) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
