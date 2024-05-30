import { getDictionary } from "./dictionaries";
import Main from "@/components/body/main/main";
import Tab from "@/components/body/tab/tab";
import Tools from "@/components/tools/tools";
import DictionaryProvider from "@/context-provider/dictionary";

export default async function Page({ params: { lang } }: any) {
  const dict = await getDictionary(lang);
  
  return (
    <main className="w-100">
      <DictionaryProvider dictionary={dict}>
        <Tools />
        <div className="flex w-a4 h-a4 m-auto">
          <div className="p-4">
            <Tab />
          </div>
          <div className="p-4">
            <Main />
          </div>
        </div>
      </DictionaryProvider>
    </main>
  );
}
