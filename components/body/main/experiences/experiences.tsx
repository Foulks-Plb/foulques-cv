import Divider from "../../divider/divider";
import Exp from "./exp/exp";

export default function Experience() {
  const onbrane =
    "Je développe une application financière décentralisée EVM, utilisant des techniques cryptographiques comme les ZKP et le chiffrement homomorphique pour assurer la confidentialité des produits de dette.";
  const hexalabs =
    "J'ai développé des front-ends avec React.js et Next.js, déployé des projets blockchain en Solidity (DeFi, Marketplace NFT, etc.), et configuré des backends.";
  const toysfilms =
    "Avec Angular et divers frameworks node.js, j'ai conçu  des solutions innovantes pour des clients majeurs comme L'Oréal, Microsoft et Air liquide.";
  
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
