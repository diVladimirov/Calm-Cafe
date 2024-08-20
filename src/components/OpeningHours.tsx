import Image from "next/image";
import openingHours from "../../public/assets/opening-hours/img.png";
import openingHoursBadge from "../../public/assets/opening-hours/program-badge.svg";
import Badge from "./Badge";
import Separator from "./Separator";

export default function OpeningHours() {
  return (
    <section className="flex bg-primary h-[60vh] xl:h-[80vh]">
      <div className="hidden relative xl:flex flex-1 justify-center items-center">
        <div className="w-full h-full absolute z-40 top-0 bg-black/60"></div>
        <Image
          src={openingHours}
          alt=""
          fill
          quality={100}
          priority
          className="object-cover"
          sizes="(max-width: 1280px) 0px, 100%"
        />
        <Badge containerStyles="w-[320px] h-[320px] absolute z-40 flex justify-center items-center" />
      </div>
      <div className="flex-1 opening-hours bg-cover bg-no-repeat flex flex-col justify-center items-center relative">
        <div className="w-full h-full absolute top-0 bg-black/[0.85] z-10"></div>
        <div className="z-20 flex flex-col justify-center items-center">
          <h2 className="h2 text-white mb-4">Opening Hours</h2>
          <Separator bg="accent" />
          <div className="mt-12 relative w-[300px] h-[220px] xl:w-[470px] xl:h-[280px]">
            <Image
              src={openingHoursBadge}
              alt=""
              fill
              priority
              quality={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
