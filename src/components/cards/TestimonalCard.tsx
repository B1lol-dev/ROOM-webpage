// assets
import { v4 as uuidv4 } from "uuid";
import star_icon from "../../assets/star_icon.svg";

interface ITestimonalCard {
  stars: number;
  text: string;
  brand: string;
}

export const TestimonalCard = ({ stars, text, brand }: ITestimonalCard) => {
  const starsCounter = [];

  for (let i = 0; i < stars; i++) {
    starsCounter.push(i);
  }

  return (
    <div className="flex flex-col gap-2 items-start">
      <div className="flex gap-[3px]">
        {starsCounter.map(() => {
          return <img src={star_icon} alt="star" key={uuidv4()} />;
        })}
      </div>
      <p className="text-white text-2xl max-w-56">“{text}”</p>
      <img src={brand} alt="brand" />
    </div>
  );
};
