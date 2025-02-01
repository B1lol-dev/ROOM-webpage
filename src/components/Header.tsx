import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// components
import { Container } from "./defaults/Containert";

// assets
import chevron_bottom from "../assets/chevron_bottom.svg";
import logo from "../assets/logo.svg";
import location_icon from "../assets/location_icon.svg";
import cart_icon from "../assets/cart_icon.svg";

export const Header = () => {
  const navLinks = ["Products", "Explore", "Shop"];

  return (
    <header className="border-b-1 border-[#E0E0E0]">
      <SubHeader />
      <Container>
        <nav className="flex items-center justify-between py-6">
          <a href="#">
            <img src={logo} alt="ROOM" />
          </a>
          <ul className="flex gap-30 max-lg:gap-20 max-md:gap-10 max-sm:hidden">
            {navLinks.map((link) => {
              return (
                <li key={uuidv4()} className="uppercase text-xs">
                  <a href={`#${link}`.toLowerCase()}>{link}</a>
                </li>
              );
            })}
          </ul>
          <div className="flex gap-2.5 max-[400px]:gap-1">
            <a
              href="#"
              className="flex gap-2.5 items-center px-5 max-[400px]:px-2"
            >
              <img src={location_icon} alt="location" />
              <h4 className="uppercase text-center text-xs max-[400px]:hidden">
                Showrooms
              </h4>
            </a>
            <a href="#" className="px-5 max-[400px]:px-2">
              <img src={cart_icon} alt="cart" />
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
};

function SubHeader({ phoneNumber = 6467913726 }) {
  const formattedNumber: string = phoneNumber
    .toString()
    .replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");

  const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);
  const [currentLang, setCurrentLang] = useState("us");

  const langs = ["us", "ru"];

  return (
    <div className="bg-gray-100 py-4 max-[400px]:text-sm">
      <Container classes="flex">
        <div className="flex ml-auto gap-6 text-r-gray items-center">
          <h3 className="uppercase max-[400px]:hidden">Contact Sales</h3>
          <a href={`tel:+${phoneNumber}`} className="uppercase">
            TEL {formattedNumber}
          </a>
          <div className="relative">
            <button
              onClick={() =>
                isVisibleDropdown
                  ? setIsVisibleDropdown(false)
                  : setIsVisibleDropdown(true)
              }
              className="uppercase flex gap-1 items-center"
            >
              {currentLang}
              <img src={chevron_bottom} alt="bottom" />
            </button>
            {isVisibleDropdown && (
              <div className="flex flex-col gap-1 absolute mt-2 bg-white border-1">
                {langs.map((lang) => {
                  return (
                    <button
                      key={uuidv4()}
                      className="uppercase transition hover:bg-gray-200 px-2"
                      onClick={() => {
                        setCurrentLang(lang);
                        setIsVisibleDropdown(false);
                      }}
                    >
                      {lang}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
