interface ICheckboxComponent {
  border_color: string;
  height: string | number;
  width: string | number;
  classes: string;
  isChecked: boolean;
  setIsChecked: Function;
}

export const Checkbox = ({
  border_color = "r-gray",
  height = "26px",
  width = "26px",
  classes,
  isChecked,
  setIsChecked,
}: ICheckboxComponent) => {
  return (
    <div
      className={`border-1 border-${border_color} h-[${height}] w-[${width}] flex items-center justify-center ${classes}`}
      onClick={() => (isChecked ? setIsChecked(false) : setIsChecked(true))}
    >
      <span
        className={`pointer-events-none! select-none h-[${height}] w-[${width}] ${
          !isChecked ? "opacity-0" : ""
        } w-[28px] flex items-center justify-center text-xl overflow-hidden`}
      >
        ✓
      </span>
    </div>
  );
};
