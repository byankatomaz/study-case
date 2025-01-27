import Image from "next/image";

type ItemProps = {
    img: string;
    text: string;
  };

  
export function Item({ img, text }: ItemProps) {
  return (
    <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
      <div className="w-7 h-7 flex items-center justify-center">
        <Image src={img} alt={text} />
      </div>
      <p className="flex-1 text-txt-gray pr-2">{text}</p>
    </li>
  );
}