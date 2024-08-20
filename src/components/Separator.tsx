import Image from "next/image";
import separatorAccent from "../../public/assets/separator-accent.svg";
import separatorWhite from "../../public/assets/separator-white.svg";

export default function Separator({ bg = "white" }) {
  const imgSrc = bg === "accent" ? separatorAccent : separatorWhite;

  return (
    <div className="relative w-[168px] h-[26px] mx-auto">
      <Image src={imgSrc} alt="separator" fill />
    </div>
  );
}
