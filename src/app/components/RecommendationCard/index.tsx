import Image, { StaticImageData } from "next/image";

interface RecommendationCardProps {
  image: string | StaticImageData;
  description?: string;
}

export const RecommendationCard = ({ image, description }: RecommendationCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Image src={image} alt='' className="h-[174px] w-[174px] rounded-lg truncate" />
      <p className="text-left text-zinc-300 font-normal text-sm h-[174px] w-[174px]">
        {description}
      </p>
    </div>
  )
}