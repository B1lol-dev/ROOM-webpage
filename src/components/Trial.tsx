import { v4 as uuidv4 } from "uuid";

// components
import { Container } from "./defaults/Container";

// assets
import trial_1 from "../assets/trial/trial_1.svg";
import trial_2 from "../assets/trial/trial_2.svg";
import trial_3 from "../assets/trial/trial_3.svg";

export const Trial = () => {
  const trials = [
    {
      img: trial_1,
      title: "FREE SHIPPING",
    },
    {
      img: trial_2,
      title: "PLUG & PLAY",
    },
    {
      img: trial_3,
      title: "FREE RETURNS",
    },
  ];

  return (
    <section className="mt-72 max-lg:mt-30">
      <Container>
        <div className="bg-gray-100 pt-16 pb-6 w-full flex flex-col items-center">
          <h1 className="text-black text-5xl max-md:text-3xl max-sm:max-w-54 max-sm:text-center">
            100 day risk-free trial
          </h1>
          <div className="flex mt-16 items-center justify-center gap-16 max-lg:gap-8 max-md:gap-0 max-sm:flex-col max-sm:gap-10">
            {trials.map((trial) => {
              return (
                <div key={uuidv4()} className="w-52 flex flex-col items-center">
                  <img src={trial.img} alt={trial.title} />
                  <h4 className="text-r-black mt-6 uppercase">{trial.title}</h4>
                </div>
              );
            })}
          </div>
          <a href="#" className="mt-16">
            <button
              type="button"
              className="uppercase bg-r-green text-white text-xs/[50px] px-8 text-center rounded-[2px] transition hover:bg-transparent hover:outline-1 hover:outline-r-green hover:text-r-green"
            >
              GET A ROOM
            </button>
          </a>
          <a href="#" className="text-r-gray mt-6 text-xs">
            <p>Terms & Conditions apply</p>
          </a>
        </div>
      </Container>
    </section>
  );
};
