interface TagProps {
  title: string;
}

export const Tag = ({ title }: TagProps) => {
  return (
    <div className="py-[4px] px-3 bg-zinc-700 rounded-full text-sm font-medium">{title}</div>
  )
}