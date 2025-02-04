import Image, { StaticImageData } from "next/image";

interface MusicCardProps {
  logo: string | StaticImageData;
  title: string;
  description: string;
  size?: number;
}

export const PlaylistItem = ({ logo, title, description, size = 12 }: MusicCardProps) => {
  return (
    <div className="flex gap-3 ">
      <Image 
        src={logo} 
        alt='something' 
        className={`rounded-md w-${size} h-${size}`} 
      />
      <div className="flex flex-col justify-center w-48">
        <h2 className="text-zinc-50 font-medium">{title}</h2>
        <p className="text-zinc-300 text-sm truncate">{description}</p>
      </div>
    </div>
  )
}