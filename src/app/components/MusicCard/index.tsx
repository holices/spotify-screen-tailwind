import Image, { StaticImageData } from "next/image";

interface MusicCardProps {
  logo: string | StaticImageData;
  title: string;
  size?: number;
  classNameImage?: string;
  className?: string;
}

export const MusicCard = ({ logo, title, size = 12, classNameImage, className }: MusicCardProps) => {
  return (
    <div className={`flex flex-1 ${className} flex-wrap items-center gap-3 bg-zinc-700 rounded-md`}>
      <Image src={logo} alt='something' className={`h-${size} w-${size} rounded-bl-md rounded-tl-md ${classNameImage}`} />
      <div className="flex-1 flex-wrap">
        <h2 className="text-zinc-50 font-semibold text-md pr-2 lg:text-[15px] xl:text-base 2xl:text-lg break-words w-full">{title}</h2>
      </div>
    </div>
  )
}