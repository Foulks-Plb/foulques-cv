"use client";

import { useDictionary } from "@/context-provider/dictionary";
import Divider from "../../divider/divider";
import Exp from "./exp/exp";

export default function Experience() {
  const { main } = useDictionary();

  return (
    <div>
      <h3>{main.experiences.title}</h3>
      <Divider />
      {main.experiences.exp.map((exp: any, i: number) => (
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
