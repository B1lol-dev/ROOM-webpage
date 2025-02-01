interface IProductCard {
  img: string;
  title: string;
}

export const ProductCard = ({ img, title }: IProductCard) => {
  return (
    <div className="flex flex-col group/card cursor-pointer w-full">
      <div className="overflow-hidden w-full">
        <img
          src={img}
          alt={title}
          className="transition w-full group-hover/card:scale-110"
        />
      </div>
      <h4 className="text-r-black text-2xl mt-2 cursor-auto">{title}</h4>
    </div>
  );
};
