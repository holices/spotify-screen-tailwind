import Image, { StaticImageData } from "next/image";

interface CardMusicProps {
  logo: string | StaticImageData;
  title: string;
}

export const CardMusic = ({ logo, title }: CardMusicProps) => {
  return (
    <div className="flex gap-3 bg-zinc-700 rounded-md w-60">
      <Image src={logo} alt='something' className="h-12 w-12 rounded-bl-md rounded-tl-md" />
      <div className="flex flex-col justify-center max-w-48">
        <h2 className="text-zinc-50 font-semibold text-sm">{title}</h2>
      </div>
    </div>
  )
}