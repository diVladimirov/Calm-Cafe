import Image from "next/image";
import badge from "../../public/assets/badge.svg";

type Props = {
  containerStyles: string;
};

export default function Badge({ containerStyles }: Props) {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image src={badge} alt="badge" className="object-contain" />
    </div>
  );
}
