interface IQualityCard {
  img: string;
  title: string;
  body: string;
}

export const QualityCard = ({ img, title, body }: IQualityCard) => {
  return (
    <div className="max-w-[330px] w-full">
      <div className="flex justify-center">
        <img src={img} alt="" />
      </div>
      <div className="mt-6">
        <h3 className="text-r-black text-2xl text-left">{title}</h3>
        <p className="text-r-gray mt-4 max-w-[316px]">{body}</p>
      </div>
    </div>
  );
};
