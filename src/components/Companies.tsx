import { v4 as uuidv4 } from "uuid";

// components
import { Container } from "./defaults/Containert";

// assets
import brand_1 from "../assets/brands/brand_1.svg";
import brand_2 from "../assets/brands/brand_2.svg";
import brand_3 from "../assets/brands/brand_3.svg";
import brand_4 from "../assets/brands/brand_4.svg";
import brand_5 from "../assets/brands/brand_5.svg";
import brand_6 from "../assets/brands/brand_6.svg";
import brand_7 from "../assets/brands/brand_7.svg";
import brand_8 from "../assets/brands/brand_8.svg";
import brand_9 from "../assets/brands/brand_9.svg";
import brand_10 from "../assets/brands/brand_10.svg";
import brand_11 from "../assets/brands/brand_11.svg";
import brand_12 from "../assets/brands/brand_12.svg";
import brand_13 from "../assets/brands/brand_13.svg";
import brand_14 from "../assets/brands/brand_14.svg";
import brand_15 from "../assets/brands/brand_15.svg";
import brand_16 from "../assets/brands/brand_16.svg";
import brand_17 from "../assets/brands/brand_17.svg";
import brand_18 from "../assets/brands/brand_18.svg";

export const Companies = () => {
  const brands = [
    brand_1,
    brand_2,
    brand_3,
    brand_4,
    brand_5,
    brand_6,
    brand_7,
    brand_8,
    brand_9,
    brand_10,
    brand_11,
    brand_12,
    brand_13,
    brand_14,
    brand_15,
    brand_16,
    brand_17,
    brand_18,
  ];

  return (
    <section className="mt-[210px] max-lg:mt-28">
      <Container classes="text-r-black flex flex-col items-center">
        <h1 className="text-center text-5xl/[3rem]">
          The world's leading brands choose ROOM.
        </h1>
        <p className="text-r-darkgray text-center text-2xl/[2.25rem] mt-[27px]">
          Over 3,000 and counting.
        </p>

        <div className="grid grid-cols-6 mt-32 gap-x-24 gap-y-14">
          {brands.map((brand) => (
            <div className="flex justify-center items-center max-w-24 w-full max-h-[60px] h-full">
              <img
                src={brand}
                alt="brand"
                key={uuidv4()}
                className="w-full h-full block object-contain!"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
