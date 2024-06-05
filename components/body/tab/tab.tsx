"use client";

import Picture from "@/components/header/picture/picture";
import Card from "./card/card";
import { useDictionary } from "@/context-provider/dictionary";

export default function Tab() {
  const { tab } = useDictionary();

  return (
    <div className="grid gap-y-4 max-w-96 min-w-64">
      <Picture />
      <Card title={tab.info.title} text={tab.info.text} />
      <Card title={tab.profil.title} text={tab.profil.text} />
      <Card title={tab.lang.title} text={tab.lang.text} />
      <Card title={tab.interest.title} text={tab.interest.text} />
    </div>
  );
}
