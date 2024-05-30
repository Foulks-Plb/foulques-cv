"use client";

import { useDictionary } from "@/context-provider/dictionary";
import Divider from "../../divider/divider";
import Exp from "../experiences/exp/exp";

export default function Education() {
  const { main } = useDictionary();

  return (
    <div>
      <h3>{main.education.title}</h3>
      <Divider />
      {main.education.exp.map((exp: any, i: number) => (
        <Exp
          key={i}
          title={exp.title}
          company={exp.company}
          date={exp.date}
          text={exp.text}
        />
      ))}
    </div>
  );
}
