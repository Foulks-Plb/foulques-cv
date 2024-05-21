import Picture from "@/components/header/picture/picture";
import Card from "./card/card";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { MdPlace } from "react-icons/md";

export default function Tab() {
  return (
    <div className="grid gap-y-4 max-w-96 min-w-64">
      <Picture />
      <Card
        title="Profil"
        text={
          "Fort de 4 - 5 ans d'expérience en développement full stack et blockchain, je suis un développeur passioné et déterminé.  Mon objectif est de continuer à apprendre et à exceller dans le domaine de la blockchain, afin de contribuer activement à cette écosystème en pleine expansion."
        }
      />
      <Card title="Langues" text={"Français, Anglais"} />
      <Card
        title="Centres d'intérêt"
        text={[
          { name: "Technologie et innovation" },
          { name: "Blockchain" },
          { name: "Finance" },
          { name: "Immobilier" },
          { name: "Sport" },
        ]}
      />
      <Card
        title="Info"
        text={[
          {
            name: "pellabeuf@gmail.com",
            link: "mailto:pellabeuf@gmail.com",
            icon: <IoMdMail />,
          },
          { name: "Paris, France", icon: <MdPlace /> },
          {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/foulques-pellabeuf-503837137/",
            icon: <FaLinkedin />,
          },
          {
            name: "Github",
            link: "https://github.com/Foulks-Plb",
            icon: <FaGithub />,
          },
          {
            name: "Medium",
            link: "https://medium.com/@pellabeuf",
            icon: <BsMedium />,
          },
          { name: "X", link: "https://x.com/FoulkPlb", icon: <FaXTwitter /> },
        ]}
      />
    </div>
  );
}
