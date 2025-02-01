import { Container } from "./defaults/Containert";

import hero_img from "../assets/hero_img.png";

export const Hero = () => {
  return (
    <section className="mt-12">
      <Container>
        <img src={hero_img} alt="room" className="w-full" />
        <div className="flex gap-32 justify-center items-center mt-24 max-lg:flex-col max-lg:items-start max-lg:gap-10 max-lg:mt-10 max-md:items-center max-md:text-center max-sm:gap-5">
          <h1 className="text-5xl/[58px] max-w-sm max-xl:text-4xl max-md:text-3xl max-sm:text-2xl max-sm:max-w-xs">
            Design that inspires a better way to work.
          </h1>
          <p className="text-r-gray max-w-[600px] text-2xl max-xl:text-xl max-md:text-base max-md:max-w-lg max-sm:text-sm">
            We've developed a series of purpose-built rooms that offer companies
            looking for change an affordable, sustainable, and flexible
            alternative to fixed construction and traditional office design.
          </p>
        </div>
      </Container>
    </section>
  );
};
