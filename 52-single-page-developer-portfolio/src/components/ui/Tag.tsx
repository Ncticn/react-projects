// Props
interface TagProps {
  text: string;
}

export default function Tag({ text }: TagProps) {
  return (
    <p className="tag text-base-grey text-body text-start uppercase">{text}</p>
  );
}
