import Title from "@/components/header/title/title";
import Education from "./education/education";
import Experience from "./experiences/experiences";
import Skills from "./skills/skills";

export default function Main() {
  return (
    <div>
      <Title />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
}
