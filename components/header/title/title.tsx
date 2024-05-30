"use client";

import { useDictionary } from "@/context-provider/dictionary";

export default function Title() {
  const { header } = useDictionary();

    return (
      <div className="h-32 content-center">
        <h1 className="whitespace-nowrap mb-2">Foulques Pellabeuf</h1>
        <h2 className="whitespace-nowrap">{header.title}</h2>
      </div>
    );
  }
  