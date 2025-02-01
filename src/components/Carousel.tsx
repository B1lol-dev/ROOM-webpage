import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// components
import { Container } from "./defaults/Containert";

// assets
import chevron_left from "../assets/chevron_left.svg";
import chevron_right from "../assets/chevron_right.svg";

export const Carousel = ({ images }: { images: string[] }) => {
  let imgDots = [];
  for (let i = 0; i < images.length; i++) {
    imgDots.push(i);
  }

  const [currentImg, setCurrentImg] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="mt-[190px]">
      <Container classes="flex flex-col items-center gap-6">
        <div className="relative flex flex-col justify-center">
          <div
            className="flex overflow-auto w-full relative snap-x snap-mandatory"
            onScroll={(e) => {
              const scrollLeft = e.currentTarget.scrollLeft;
              const width = e.currentTarget.clientWidth;
              const newIndex = Math.round(scrollLeft / width);
              setCurrentImg(newIndex);
            }}
            ref={carouselRef}
          >
            {images.map((image, index) => (
              <img
                src={image}
                alt={`carousel-${index}`}
                key={uuidv4()}
                className="transition-transform duration-500 ease-in-out snap-center"
              />
            ))}
          </div>

          <div className="flex w-full justify-between absolute px-14">
            <button
              type="button"
              onClick={() => {
                if (currentImg > 0) {
                  setCurrentImg(currentImg - 1);
                  carouselRef.current?.scrollTo({
                    left: (currentImg - 1) * carouselRef.current?.clientWidth,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <img src={chevron_left} alt="<" className="select-none" />
            </button>
            <button
              type="button"
              onClick={() => {
                if (currentImg < images.length - 1) {
                  setCurrentImg(currentImg + 1);
                  carouselRef.current?.scrollTo({
                    left: (currentImg + 1) * carouselRef.current?.clientWidth,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <img src={chevron_right} alt=">" className="select-none" />
            </button>
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          {imgDots.map((_, index) => (
            <button
              type="button"
              className={`h-3 w-3 rounded-full ${
                index === currentImg ? "bg-r-green" : "bg-gray-300"
              }`}
              key={uuidv4()}
              onClick={() => {
                setCurrentImg(index);
                carouselRef.current?.scrollTo({
                  left: index * carouselRef.current?.clientWidth,
                  behavior: "smooth",
                });
              }}
            ></button>
          ))}
        </div>
      </Container>
    </section>
  );
};
