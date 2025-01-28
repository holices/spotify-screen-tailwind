interface TagProps {
  title: string;
}

export const Tag = ({ title }: TagProps) => {
  return (
    <span className="py-[6px] px-3 bg-zinc-800 rounded-full text-sm font-medium">{title}</span>
  )
}