import Divider from "../../divider/divider";

export default function Skills() {
  const frontEnd = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Angular",
    "HTML/CSS",
    "Node",
    "Tailwind",
    "Bootstrap"
  ];

  const backEnd = [
    "NestJs",
    "SQL",
    "ExpressJs",
    "Sequelize",
    "TypeORM",
    "GraphQL",
    "Redis",
    "MongoDB",
    "Docker",
  ];

  const blockchain = [
    "Solidity",
    "Rust",
    "Ethers.js/Wagmi",
    "Hardaht/Forge",
    "Circom",
    "Noir-lang",
  ];

  return (
    <div>
      <h3>Compétences techniques</h3>
      <Divider />
      <h4 className="mb-2">Langages de programmation</h4>
      <div className="grid grid-cols-4 gap-4">
        <ul>
          {frontEnd.map((skill: string) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <ul>
          {backEnd.map((skill: string) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <ul>
          {blockchain.map((skill: string) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
