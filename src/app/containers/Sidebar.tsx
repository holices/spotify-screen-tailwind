import { ArrowRight, Library, List, Plus, Search } from "lucide-react";
import { Tag } from "../components/Tag";
import { PlaylistItem } from "../components/PlaylistItem";

import churranquinho from '../../../public/pagode.jpeg';
import likedSongs from '../../../public/liked.jpg';
import yourEpisodes from '../../../public/eaasl.jpeg';
import imgJJPodcast from '../../../public/jj.jpeg';


export function Sidebar() {
  return (
    <div className="mt-16 rounded-lg bg-zinc-900 px-4 py-[18px]">
      <nav className="w-64 flex flex-col gap-4">
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
          <PlaylistItem logo={likedSongs} title='Liked Songs' description="Playlist &#8226; 276 songs" />
          <PlaylistItem logo={imgJJPodcast} title='Jota Jota Podcast' description="Podcast &#8226; Joel Jota" />
          <PlaylistItem logo={churranquinho} title='Churrasquinho' description="Playlist &#8226; Holices Sanson" />
          <PlaylistItem logo={yourEpisodes} title='Your Episodes' description="Saves & downloaded episodes" />
        </div>
      </nav>
    </div>
  )
}