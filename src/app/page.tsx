import { Tag } from "./components/Tag";
import { MainCards } from "./containers/MainCards";
import { Header } from "./containers/Header";
import { Sidebar } from "./containers/Sidebar";
import Footer from "./containers/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 min-w-[800px] flex-col p-2">
      <Header />
      <div className="flex flex-1 gap-2">
        <Sidebar />
        <main className="rounded-lg flex flex-1 items-center flex-col mt-16 px-10 py-4 bg-gradient-to-b from-zinc-800 to-zinc-950 overflow-x-hidden">
          <div className="max-w-[1875px] w-full flex flex-1 text-left gap-2">
            <Tag title="All" />
            <Tag title="Music" />
            <Tag title="Podcasts" />
          </div>
          <MainCards title={'Made For You'} /> 
        </main>
      </div>

      <Footer />
      
    </div>
  );
}
