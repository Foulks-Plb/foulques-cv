import Main from "@/components/body/main/main";
import Tab from "@/components/body/tab/tab";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <main >
      <Header />
      <div className="flex">
        <div className="px-4">
          <Tab />
        </div>
        <div className="px-4">
          <Main />
        </div>
      </div>
    </main>
  );
}
