"use client";

import Main from "@/components/body/main/main";
import Tab from "@/components/body/tab/tab";

export default function Home() {
  return (
    <main className="w-100 foulquesCv" >
      <div className="flex w-a4 h-a4 m-auto">
        <div  className="p-4">
          <Tab  />
        </div>
        <div className="p-4">
          <Main />
        </div>
      </div>
    </main>
  );
}
