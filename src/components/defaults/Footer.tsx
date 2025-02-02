import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

// components
import { Container } from "./Container";
import { Checkbox } from "../ui/Checkbox";

// assets
import logo_white from "../../assets/logo_white.svg";
import facebook_icon from "../../assets/socials/facebook_icon.svg";
import instagram_icon from "../../assets/socials/instagram_icon.svg";
import linkedin_icon from "../../assets/socials/linkedin_icon.svg";
import pinterest_icon from "../../assets/socials/pinterest_icon.svg";

export const Footer = () => {
  const footerLinks = [
    {
      title: "About",
      items: [
        "Compare",
        "Reviews",
        "Risk-Free Trial",
        "Careers",
        "Press",
        "Podcast",
        "Blog",
      ],
    },
    {
      title: "Support",
      items: [
        "FAQ",
        "Booth Assembly",
        "Delivery",
        "Room Service",
        "Warranty",
        "Terms of Use",
        "Privacy Policy",
        "Copyright",
      ],
    },
    {
      title: "Showrooms",
      items: [
        "New York",
        "London",
        "San Francisco",
        "Paris",
        "Copenhagen",
        "Zürich",
        "Los Angeles",
        "Berlin",
        "Belgium",
        "Virtual Demo",
      ],
    },
    {
      title: "Office",
      items: ["599 Broadway, FL 9 New York, NY 10012"],
    },
  ];

  const socials = [
    facebook_icon,
    instagram_icon,
    linkedin_icon,
    pinterest_icon,
  ];

  const [isFormChecked, setIsFormChecked] = useState(false);

  return (
    <footer className="bg-r-brown mt-20">
      <Container classes="pt-24 pb-20">
        <div className="text-white flex gap-16 relative max-[1300px]:gap-8 max-[1200px]:flex-col max-[1200px]:items-center">
          <a href="#">
            <img src={logo_white} alt="ROOM" />
          </a>
          <div className="grid grid-cols-2 gap-5 max-[1200px]:text-center max-sm:flex max-sm:flex-col max-sm:gap-10">
            {footerLinks.map((link) => {
              return (
                <ul className="max-w-44 w-full text-sm" key={uuidv4()}>
                  <h2 className="mb-5">
                    <a href={`#${link.title}`}>{link.title}</a>
                  </h2>
                  {link.items.map((item) => {
                    return (
                      <li className="mt-1" key={uuidv4()}>
                        <a href={`#${item}`}>{item}</a>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
          <div>
            <h3 className="text-sm">Follow us</h3>
            <div className="flex gap-3 mt-[1rem]">
              {socials.map((social) => {
                return (
                  <a href={`https://www.${social}.com/room`} key={uuidv4()}>
                    <img src={social} alt="social" width="20" />
                  </a>
                );
              })}
            </div>
          </div>
          <form
            className="max-w-[400px] w-full flex flex-col max-[1200px]:text-center"
            onSubmit={(e) => {
              if (!isFormChecked) {
                e.preventDefault();
                alert("Please enable the checkbox");
              }
            }}
          >
            <h3 className="text-sm">Join our mailing list</h3>
            <h4 className="text-sm mt-4">
              Be the first to hear everything about ROOM.
            </h4>
            <input
              type="text"
              className="mt-8 border-r-gray border-1 h-14 w-full! px-4 focus:outline-none focus:border-white"
            />
            <select
              name="country"
              className="text-r-gray mt-4 ml-auto cursor-pointer transition hover:text-white capitalize"
              defaultValue="us"
            >
              <option value="us" className="capitalize">
                United States
              </option>
              <option value="ru" className="capitalize">
                Russia
              </option>
            </select>

            <label className="flex items-start mt-14 w-full relative max-sm:flex-col-reverse max-sm:items-center max-sm:gap-5">
              <Checkbox
                border_color="r-gray"
                height="28px"
                width="28px"
                isChecked={isFormChecked}
                setIsChecked={setIsFormChecked}
                classes="absolute left-[0%] translate-x-[calc(-100%-20px)] max-sm:translate-x-[0] max-sm:static"
              />
              <p className="translate-x uppercase text-r-gray tracking-[2.4px] w-full text-sm cursor-auto">
                Yes. I would like to receive marketing communications from ROOM
                about product updates and special offers. Please refer to ROOM’s
                Privacy Policy for more information about how we process your
                data (including how to unsubscribe).
              </p>
            </label>

            <button
              type="submit"
              className="uppercase text-white mx-[auto_36px] mt-14 max-sm:mx-auto"
            >
              Sign Up
            </button>
          </form>
          <a
            href="#"
            className="text-white absolute right-0 bottom-8 text-xl -rotate-90 max-sm:text-sm max-sm:bottom-0"
          >
            Return to the top
          </a>
        </div>
      </Container>
    </footer>
  );
};
