import Arrow from "@/assets/arrow-down.svg";
import Image from "next/image";

type Props = {
    name: string
}

export function ItemMenu({ name }: Props) {
  return (
    <button className="flex items-center gap-3">
      <span className="text-white font-bold">{name}</span>
      <Image src={Arrow} alt="arrow down" />
    </button>
  );
}
