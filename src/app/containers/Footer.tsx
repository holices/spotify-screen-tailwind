import { AlignJustify, CirclePlus, Computer, Maximize2, MicVocal, Minimize, Play, Repeat, Shuffle, SkipBack, SkipForward, SquarePlay, Volume2 } from "lucide-react";
import { PlaylistItem } from "../components/PlaylistItem";

import imgJJPodcast from '../../../public/jj.jpeg';

export default function Footer() {
  return (
    <footer className="fixed min-w-[800px] bottom-0 left-0 w-full py-2 px-2 flex items-center bg-zinc-950">
      <div className="flex items-center gap-4 flex-1">
        <PlaylistItem 
          logo={imgJJPodcast} 
          title='Jota Jota Podcast' 
          description="Podcast &#8226; Joel Jota" 
        />
        <CirclePlus size={20} className="text-zinc-400 mr-3" />
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle className="text-zinc-400" size={18} />
          <SkipBack className="text-zinc-400" size={18} />
          <div className="h-8 w-8 bg-zinc-600 flex items-center justify-center rounded-full">
            <Play size={20} />
          </div>
          <SkipForward className="text-zinc-400" size={18} />
          <Repeat className="text-zinc-400" size={18} />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs">1:40</p>
          <div className="flex items-center">
            <div className="minimum:w-[124px] md:w-[264px] lgg:w-[424px] xl:w-[626px] h-1 bg-zinc-600 rounded-full relative">
              <div className="h-1 bg-zinc-50 rounded-full absolute" style={{ width: "90%" }} />
            </div>
          </div>
          <p className="text-xs">10:11</p>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-1 justify-end">
        <SquarePlay size={18} className="text-zinc-400 minimum:hidden lg:block" />
        <MicVocal size={18} className="text-zinc-400 minimum:hidden lg:block" />
        <AlignJustify size={18} className="text-zinc-400 minimum:hidden lg:block" />
        <Computer size={18} className="text-zinc-400 minimum:hidden lg:block" />
        <Volume2 size={18} className="text-zinc-400 minimum:hidden lg:block" />

        <div className="w-24 h-1 bg-zinc-600 rounded-full relative">
          <div className="h-1 bg-zinc-50 rounded-full absolute" style={{ width: "45%" }}></div>
        </div>

        <Minimize size={18} className="text-zinc-400" />
        <Maximize2 size={18} className="text-zinc-400" />
      </div>
    </footer>
  )
}