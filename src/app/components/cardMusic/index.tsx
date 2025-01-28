import Image, { StaticImageData } from "next/image";

interface CardMusicProps {
  logo: string | StaticImageData;
  title: string;
  description: string;
}

export const CardMusic = ({ logo, title, description }: CardMusicProps) => {
  return (
    <div className="flex gap-3 ">
      <Image src={logo} alt='something' className="h-12 w-12 rounded-md" />
      <div className="flex flex-col justify-center max-w-48">
        <h2 className="text-zinc-50 font-medium">{title}</h2>
        <p className="text-zinc-300 truncate">{description}</p>
      </div>
    </div>
  )
}