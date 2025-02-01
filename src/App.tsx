import { Carousel } from "./components/Carousel";
import { Companies } from "./components/Companies";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Qualities } from "./components/Qualities";
import { Testimonals } from "./components/Testimonals";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";

// assets
import carousel_1 from "./assets/carousel/carousel_1.png";
import carousel_2 from "./assets/carousel/carousel_1.png";
import carousel_3 from "./assets/carousel/carousel_1.png";

function App() {
  const carouselImages = [carousel_1, carousel_2, carousel_3];

  return (
    <div className="font-roboto">
      <Header />
      <main>
        <Hero />
        <Products />
        <Companies />
        <Carousel images={carouselImages} />
        <Qualities />
        <Testimonals />
        <Services />
        <Gallery />
      </main>
    </div>
  );
}

export default App;
