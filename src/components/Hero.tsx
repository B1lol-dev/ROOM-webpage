import { Container } from "./defaults/Containert";

import hero_img from "../assets/hero_img.png";

export const Hero = () => {
  return (
    <section className="mt-12">
      <Container>
        <img src={hero_img} alt="room" className="w-full" />
        <div className="flex gap-32 justify-center items-center mt-24">
          <h1 className="text-5xl/[58px] max-w-sm">
            Design that inspires a better way to work.
          </h1>
          <p className="text-r-gray max-w-[600px] text-2xl">
            We've developed a series of purpose-built rooms that offer companies
            looking for change an affordable, sustainable, and flexible
            alternative to fixed construction and traditional office design.
          </p>
        </div>
      </Container>
    </section>
  );
};
