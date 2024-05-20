import Card from "./card/card";

export default function Tab() {
  return (
    <div className="grid gap-y-4 max-w-96 min-w-64">
      <Card
        title="Profil"
        text={
          "Fort de 4 - 5 ans d'expérience en développement full stack et blockchain, je suis un développeur passioné et déterminé.  Mon objectif est de continuer à apprendre et à exceller dans le domaine de la blockchain, afin de contribuer activement à cette écosystème en pleine expansion."
        }
      />
      <Card title="Langues" text={"Français, Anglais"} />
      <Card title="Centres d'intérêt" text={"Technologie et innovation, Blockchain, Finance, Immobilier, Sport"} />
    </div>
  );
}
