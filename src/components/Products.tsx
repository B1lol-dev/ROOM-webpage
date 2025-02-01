import { v4 as uuidv4 } from "uuid";

// components
import { Container } from "./defaults/Container";
import { ProductCard } from "./cards/ProductCard";

// assets
import product_1 from "../assets/products/product_1.png";
import product_2 from "../assets/products/product_2.png";
import product_3 from "../assets/products/product_3.png";
import product_4 from "../assets/products/product_4.png";

export const Products = () => {
  const productList = [
    {
      img: product_1,
      title: "Phone Booth",
    },
    {
      img: product_2,
      title: "Focus Room",
    },
    {
      img: product_3,
      title: "Meeting Room",
    },
    {
      img: product_4,
      title: "Open Meeting Room",
    },
  ];

  return (
    <section className="mt-[210px] max-lg:mt-28">
      <Container>
        <div className="grid grid-cols-2 justify-center gap-y-6 gap-x-8 pb-8 max-md:grid-cols-1">
          {productList.map((product) => (
            <ProductCard
              img={product.img}
              title={product.title}
              key={uuidv4()}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
