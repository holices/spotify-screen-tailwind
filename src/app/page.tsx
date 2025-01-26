import { ArrowRight, Library, Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col p-2">
      <header className="p-4">
        header
      </header>
      <div className="flex flex-1 gap-2">
        <aside className="w-72 bg-zinc-900 rounded-lg p-5">
          <nav className="flex flex-col gap-6">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Library />
                Your Library
              </div>
              <div className="flex gap-4">
                <Plus />
                <ArrowRight />
              </div>
            </div>

            <div className="flex gap-2">
              <span className="py-1 px-3 bg-zinc-800 rounded-full">Playlists</span>
              <span className="py-1 px-3 bg-zinc-800 rounded-full">Podcasts & Shows</span>
            </div>
          </nav>
        </aside>
        <main className="flex-1 bg-zinc-900 rounded-lg p-5">
          main
        </main>
      </div>
      <footer className="p-7">
        footer
      </footer>
    </div>
  );
}
