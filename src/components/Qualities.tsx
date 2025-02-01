import { v4 as uuidv4 } from "uuid";

// components
import { QualityCard } from "./cards/QualityCard";
import { Container } from "./defaults/Containert";

// assets
import quality_1 from "../assets/qualities/quality_1.svg";
import quality_2 from "../assets/qualities/quality_2.svg";
import quality_3 from "../assets/qualities/quality_3.svg";

export const Qualities = () => {
  const qualities = [
    {
      img: quality_1,
      title: "Cost-effective",
      body: "At a fraction of the cost of traditional construction, our pre-fab solutions create additional space for focused work and collaboration without constant noise, debris and distraction.",
    },
    {
      img: quality_2,
      title: "Time Saving",
      body: "Thoughtful design ensures simple installation in a few hours or less. And, because our products are safety ensured, you'll never have to spend time or money chasing after permits, contractors, and more.",
    },
    {
      img: quality_1,
      title: "Flexible",
      body: "Unlike traditional construction, our purpose-built products were designed to adapt with your workspace and can easily be positioned in various places throughout your office, or to an entirely new location.",
    },
  ];

  return (
    <section className="mt-20">
      <Container classes="flex flex-col items-center">
        <div>
          <h1 className="text-left max-w-6xl text-5xl text-r-black">
            Our simple and seamless modular products allow teams to shape and
            then reshape their work environment with ease.
          </h1>
          <p className="uppercase text-r-green mt-6">GET IN TOUCH</p>
        </div>
        <div className="flex gap-10 mt-11 justify-center">
          {qualities.map((quality) => (
            <QualityCard
              img={quality.img}
              title={quality.title}
              body={quality.body}
              key={uuidv4()}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
