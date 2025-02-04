import { Bell, CircleArrowDown, FolderSearch2, House, Search } from "lucide-react";
import Image from "next/image";

import spotifyLogo from '../../../public/spotify-logo.png';

export function Header() {
  return (
    <header className="fixed min-w-[800px] top-0 left-0 py-1 px-4 flex w-full items-center justify-between bg-zinc-950">
      <div className="flex items-center py-2 justify-start mr-48 minimum:relative mddd:static ">
        <Image src={spotifyLogo} alt="" className="w-9 h-9 bg-transparent" />
      </div>

      <div className="flex-1 flex justify-center pt-2 minimum:absolute minimum:ml-20 mddd:static">
        <div className="relative flex min-w-[320px] items-center bg-zinc-800 w-full max-w-[474px] h-12 rounded-full">
          <div className="absolute left-3">
            <Search />
          </div>
          <input 
            type="text" 
            className="flex flex-1 bg-transparent ml-10 placeholder:font-medium min-w-0 w-full" 
            placeholder="What do you want to play?" 
          />
          <div className="h-6 w-px bg-zinc-500 absolute right-12"></div>
          <div className="absolute right-3">
            <FolderSearch2 />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1 mr-6">
          <CircleArrowDown size={20} className="text-zinc-500" />
          <p className="text-zinc-500 font-semibold text-sm truncate">Install App</p>
        </div>
        <Bell size={20} className="text-zinc-500" />
        <img src="https://github.com/holices.png" alt="" className="w-12 rounded-full p-2 bg-zinc-800" />
      </div>
    </header>
  )
}