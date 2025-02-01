import { v4 as uuidv4 } from "uuid";

// components
import { Container } from "./defaults/Containert";
import { TestimonalCard } from "./cards/TestimonalCard";

// assets
import tbrand_1 from "../assets/testimonal_brands/tbrand_1.svg";
import tbrand_2 from "../assets/testimonal_brands/tbrand_2.svg";
import tbrand_3 from "../assets/testimonal_brands/tbrand_3.svg";
import testimonal_bg from "../assets/testimonals_bg.png";

export const Testimonals = () => {
  const testimonals = [
    {
      stars: 5,
      text: "We can now have meetings in peace.",
      brand: tbrand_1,
    },
    {
      stars: 5,
      text: "Amazing private space to get work done.",
      brand: tbrand_2,
    },
    {
      stars: 5,
      text: "Our booths are in constant use.",
      brand: tbrand_3,
    },
  ];

  return (
    <section className="mt-[240px] max-lg:mt-28">
      <Container>
        <div
          className="bg-cover bg-center py-35 pl-[185px] max-xl:bg-left max-lg:pl-0"
          style={{ backgroundImage: `url(${testimonal_bg})` }}
        >
          <div className="w-full flex flex-col gap-10 max-lg:flex max-lg:justify-center max-lg:items-center">
            <>
              {testimonals.map((testimonal) => {
                return (
                  <TestimonalCard
                    stars={testimonal.stars}
                    text={testimonal.text}
                    brand={testimonal.brand}
                    key={uuidv4()}
                  />
                );
              })}
            </>
            <a href="#" className="text-white uppercase mt-10">
              READ MORE REVIEWS
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
