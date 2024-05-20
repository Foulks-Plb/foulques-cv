import Divider from "../../divider/divider";

export default function Skills() {
  const frontEnd = [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Angular",
    "HTML/CSS",
    "Tailwind/Bootstrap",
  ];

  const backEnd = [
    "NestJs",
    "SQL/NOSQL",
    "Sequelize/TypeORM",
    "GraphQL",
    "Redis",
    "Docker",
  ];

  const blockchain = [
    "Solidity",
    "Rust",
    "Ethers.js/Wagmi",
    "Hardhat/Forge",
    "Circom",
    "Noir-lang",
  ];

  return (
    <div className="mb-2">
      <h3>Compétences techniques</h3>
      <Divider />
      <h4 className="mb-2">Langages de programmation</h4>
      <div className="grid grid-cols-3">
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
