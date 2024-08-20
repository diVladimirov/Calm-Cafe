import { MENU } from "@/constants/menu";
import Separator from "../Separator";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <section className="pt-12 pb-16 xl:pt-16 xl:pb-36 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 mb-12 xl:mb-24">
          <h2 className="h2 text-center">Our Menu</h2>
          <div className="mb-4">
            <Separator bg="accent" />
          </div>
          <p className="text-center max-w-[620px] mx-auto">
            Indulge in our handcrafted selection of coffee and delightful
            treats. Our menu is designed to awaken your senses, whether you're
            in the mood for a classic espresso, a rich and creamy latte, or a
            refreshing iced coffee. Pair your drink with one of our freshly
            baked pastries or savory snacks, all made with the finest
            ingredients. Relax, unwind, and let us take you on a flavorful
            journey.
          </p>
        </div>
        <div className="flex flex-col items-center gap-12 xl:gap-24">
          <ul className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center">
            {MENU.map((item, index) => (
              <MenuItem key={index} item={item} index={index} />
            ))}
          </ul>
          <button className="btn">View full menu</button>
        </div>
      </div>
    </section>
  );
}
