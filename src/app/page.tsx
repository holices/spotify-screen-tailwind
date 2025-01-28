import { ArrowDown, ArrowRight, Bell, CircleArrowDown, FolderSearch2, House, Library, List, Plus, Search } from "lucide-react";
import { CardMusic } from "./components/cardMusic";
import { Tag } from "./components/tag";

import spotifyLogo from '../../public/spotify-logo.png'
import likedSongs from '../../public/liked.jpg'
import imgJJPodcast from '../../public/jj.jpeg'
import churranquinho from '../../public/pagode.jpeg'
import yourEpisodes from '../../public/eaasl.jpeg'
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col p-2">
      <header className="pb-2 px-4 flex items-center justify-between">
        <div className="flex justify-start mr-40">
          <Image src={spotifyLogo} alt="" className="w-9 h-9 bg-transparent" />
        </div>

        <div className="flex items-center">
          <div className="p-3 mr-2 rounded-full bg-zinc-800">
            <House />
          </div>
          <div className="relative flex items-center bg-zinc-800 w-[474px] h-12 rounded-full">
            <div className="absolute left">
              <Search className="ml-3" />
            </div>
            <input type="text" className="bg-transparent ml-12 placeholder:font-medium" placeholder="What do you want to play?" />
            <div className="h-6 w-px bg-zinc-500 absolute right-12"></div>
            <div className="absolute right-3">
              <FolderSearch2 />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1 mr-6">
            <CircleArrowDown size={20} className="text-zinc-500" />
            <p className="text-zinc-500 font-semibold text-sm">Install App</p>
          </div>

          <Bell size={20} className="text-zinc-500" />

          <img src="https://github.com/holices.png" alt="" className="w-12 rounded-full p-2 bg-zinc-800" />
        </div>
      </header>

      <div className="flex flex-1 gap-2">
        <aside className="w-72 bg-zinc-900 rounded-lg px-4 py-[18px]">
          <nav className="flex flex-col gap-4">
            <div className="flex justify-between items-center px-2">
              <div className="flex gap-2 items-center">
                <Library size={30} className="text-zinc-400" />
                <p className="text-[15px] font-extrabold text-zinc-400">Your Library</p>
              </div>
              <div className="flex gap-5">
                <Plus size={22} className="text-zinc-400" />
                <ArrowRight size={22} className="text-zinc-400" />
              </div>
            </div>

            <div className="flex gap-2 mt-1">
              <Tag title="Playlist" />
              <Tag title="Podcasts & Shows" />
            </div>

            <div className="flex justify-between items-center px-2">
              <Search size={20} className="text-zinc-400" />
              <p className="flex items-center gap-1 text-[13px] text-zinc-400">
                Recentes
                <List size={20} />
              </p>
            </div>

            <div className="mt-2 flex flex-col gap-4">
              <CardMusic logo={likedSongs} title='Liked Songs' description="Playlist &#8226; 276 songs" />
              <CardMusic logo={imgJJPodcast} title='Jota Jota Podcast' description="Podcast &#8226; Joel Jota" />
              <CardMusic logo={churranquinho} title='Churrasquinho' description="Playlist &#8226; Holices Sanson" />
              <CardMusic logo={yourEpisodes} title='Your Episodes' description="Saves & downloaded episodes" />
            </div>
          </nav>
        </aside>

        <main className="flex-1 bg-zinc-900 rounded-lg px-10 py-5">
          <div className="flex gap-2">
            <Tag title="All" />
            <Tag title="Music" />
            <Tag title="Podcasts" />
          </div>

          <div>

          </div>
        </main>

      </div>
      <footer className="p-7 flex items-center justify-between">
        <div>

        </div>

        <div>

        </div>

        <div>

        </div>
      </footer>
    </div>
  );
}
