import { v4 as uuidv4 } from "uuid";

// components
import { Container } from "./defaults/Containert";
import { ServiceCard } from "./cards/ServiceCard";

// assets
import service_1 from "../assets/services/service_1.png";
import service_2 from "../assets/services/service_2.png";
import service_3 from "../assets/services/service_3.png";

export const Services = () => {
  const services = [
    {
      img: service_1,
      title: "We sell direct.",
      body: "We make extra room in the budget without compromising quality by selling direct. No middle man, and no additional construction required.",
      align: "left",
    },
    {
      img: service_2,
      title: "We build with purpose.",
      body: "We’re not just building another room with four walls, we’re building a more productive workspace. We design with you in mind, looking at every detail as an opportunity to enable a better working environment for everyone.",
      align: "right",
    },
    {
      img: service_3,
      title: "We design sustainably.",
      body: "From design to delivery, we strive to lessen our impact on the environment. Our products are engineered with recycled materials and replace multiple cycles of construction, minimizing noise and our footprint.",
      align: "left",
    },
  ];

  return (
    <section className="mt-60 max-lg:mt-28">
      <Container classes="flex flex-col items-center">
        <div>
          <h1 className="text-r-gray text-5xl max-w-4xl max-xl:text-3xl max-lg:text-2xl max-lg:text-center max-lg:max-w-2xl max-sm:text-xl max-sm:max-w-md">
            We take a human approach to a business-to-business industry,
            breaking the boundaries between corporate and personal, and
            rethinking every step of the user experience along the way.
          </h1>
          <h2 className="text-r-black text-5xl mt-6 max-xl:text-3xl max-lg:text-2xl max-lg:text-center max-sm:text-xl">
            We make work, work for you.
          </h2>
        </div>
        <div className="flex flex-col gap-16 mt-32">
          {services.map((service) => (
            <ServiceCard
              img={service.img}
              title={service.title}
              body={service.body}
              align={service.align}
              key={uuidv4()}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
