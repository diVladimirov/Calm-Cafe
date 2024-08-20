import Image from "next/image";
import expoloreCup from "../../public/assets/explore/cup.png";
import coffee1 from "../../public/assets/explore/coffees/coffee-1.svg";
import coffee2 from "../../public/assets/explore/coffees/coffee-2.svg";
import coffee3 from "../../public/assets/explore/coffees/coffee-3.svg";
import coffee4 from "../../public/assets/explore/coffees/coffee-4.svg";

export default function Explore() {
  return (
    <section className="py-20 xl:py-0 xl:h-[90vh] xl:w-screen">
      <div className="container mx-auto px-4 xl:w-full xl:h-full flex xl:justify-center xl:items-center">
        <div className=" w-full flex flex-col lg:flex-row gap-12 xl:gap-20">
          <div className="flex-1 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            <div className="realtive flex items-start">
              <div className="xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end">
                <div className="mb-6 flex justify-center items-center">
                  <Image src={coffee1} alt="" width={56} height={56} />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                  Rich Espresso Blends
                </h3>
                <p className="max-w-[400px]">
                  Indulge in the deep, robust flavors of our expertly crafted
                  espresso blends. Perfect for a quick pick-me-up or a leisurely
                  afternoon treat.
                </p>
              </div>
            </div>
            <div className="realtive flex items-start">
              <div className="xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end">
                <div className="mb-6 flex justify-center items-center">
                  <Image src={coffee2} alt="" width={56} height={56} />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                  Classic Drip Coffee
                </h3>
                <p className="max-w-[400px]">
                  Enjoy the comforting taste of our classic drip coffee, brewed
                  to perfection. A timeless choice for coffee enthusiasts who
                  appreciate simplicity.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden xl:flex justify-center">
            <div className="relative w-[322px] h-[580px]">
              <Image
                src={expoloreCup}
                alt=""
                fill
                className="object-cover"
                quality={100}
                priority
                data-scroll
                data-scroll-speed="0.1"
                sizes="(max-width: 1280px) 0px, 322px"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-around text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            <div className="realtive flex items-start">
              <div className="xl:max-w-[420px] xl:text-left xl:flex xl:flex-col xl:items-start">
                <div className="mb-6 flex justify-center items-center">
                  <Image src={coffee3} alt="" width={56} height={56} />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                  Smooth Cold Brews
                </h3>
                <p className="max-w-[400px]">
                  Refresh yourself with our smooth and invigorating cold brew
                  options. Ideal for those warm days when you need a cool,
                  caffeinated boost.
                </p>
              </div>
            </div>
            <div className="realtive flex items-start">
              <div className="xl:max-w-[420px] xl:text-left xl:flex xl:flex-col xl:items-start">
                <div className="mb-6 flex justify-center items-center">
                  <Image src={coffee4} alt="" width={56} height={56} />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                  Flavorful Latte Varieties
                </h3>
                <p className="max-w-[400px]">
                  Experience the rich and creamy flavors of our diverse latte
                  selections. From vanilla to caramel, we have a latte to suit
                  every taste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
