import { v4 as uuidv4 } from "uuid";

// components
import { Container } from "./defaults/Containert";

// assets
import gallery_1 from "../assets/gallery/gallery_1.png";

export const Gallery = () => {
  const pictures = [gallery_1, gallery_1, gallery_1];

  return (
    <section className="mt-72 max-lg:mt-30">
      <Container>
        <div className="overflow-auto flex snap-x snap-mandatory">
          {pictures.map((picture) => {
            return (
              <img
                src={picture}
                alt="picture"
                className="snap-center"
                key={uuidv4()}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};
