interface IServiceCard {
  img: string;
  title: string;
  body: string;
  align: string;
}

export const ServiceCard = ({ img, title, body, align }: IServiceCard) => {
  return (
    <div
      className={`flex justify-between items-center gap-24 ${
        align !== "left" ? "max-xl:flex-col-reverse" : "max-xl:flex-col"
      }`}
    >
      <img
        src={img}
        alt={title}
        className={align !== "left" ? "order-1" : ""}
      />
      <div>
        <h1 className="text-r-black text-[2rem]">{title}</h1>
        <p className="text-r-gray mt-7 text-base max-w-xs">{body}</p>
      </div>
    </div>
  );
};
