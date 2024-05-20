import Divider from "../../divider/divider";
import Exp from "../experiences/exp/exp";

export default function Education() {
  const hetic =
    "Formation axée sur la création de contenu 3D temps réel, couvrant les mathématiques appliquées et le développement web.";

  return (
    <div>
      <h3>Education</h3>
      <Divider />
      <Exp
        title="Bachelor 3d temps réel"
        company="Hetic"
        date="2017 - 2020"
        text={hetic}
      />
    </div>
  );
}
