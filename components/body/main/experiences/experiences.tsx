import Divider from "../../divider/divider";
import Exp from "./exp/exp";

export default function Experience() {
  const onbrane =
    "Mon rôle consiste à développer une application financière décentralisée EVM, utilisant des primitives cryptographiques telles que les ZKP et le chiffrement homomorphique pour garantir la confidentialité des produits de dette.";
  const hexalabs =
    "React.js - Next.js: Ma mission a été de produire des front-end sur-mesure. Solidity: Construire et deployer tout type de projets sur blockchain: Defi, MarketplaceNFT. BackEnd: Monter tout type de backend en SQL et NO-SQL.";
  const toysfilms =
    "Angular: Ma mission a été de développer des applications grand public à plus de 10.000 utilisateurs pour l'Oreal, Microsoft, Royal Canin,... Javascript - Typescript: Proposer des solutions de metaverse en 3D temps réel sur navigateur.";

  return (
    <div>
      <h3>Expérience</h3>
      <Divider />
      <Exp
        title="Lead blockchain"
        company="Onbrane"
        date="2023 - Aujourd'hui"
        text={onbrane}
      />
      <Exp
        title="Développeur full stack & blockchain"
        company="Hexalabs"
        date="2022 - 2023"
        text={hexalabs}
      />
      <Exp
        title="Développeur full stack"
        company="Toys films"
        date="2020 - 2022"
        text={toysfilms}
      />
    </div>
  );
}
