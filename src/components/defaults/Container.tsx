interface Props {
  classes?: string;
  children: JSX.Element[] | JSX.Element;
}

export const Container = ({ children, classes = "" }: Props) => {
  return (
    <div className={`container mx-auto max-w-[1324px] px-4 w-full ${classes}`}>
      {children}
    </div>
  );
};
