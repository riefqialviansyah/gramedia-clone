import About from "./about";
import Icon, { IconFacebook, IconInstagram, IconTwitter } from "./icon";

export default function Footer() {
  return (
    <footer className=" border-b shadow-md w-full bg-white h-24s relative">
      <About />
      <div className="h-20 border flex items-center justify-between">
        <Icon />
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-400">
            The largest, most complete and trusted online bookstore in Indonesia
          </p>
          <p className="font-extralight text-gray-400 italic">
            All properties belong to{" "}
            <a
              href="https://www.gramedia.com/"
              target="blank"
              className="text-emerald-500 font-normal"
            >
              www.gramedia.com
            </a>
            , this website is for educational purposes only
          </p>
        </div>
        <div className="flex flex-row gap-5">
          <IconInstagram />
          <IconTwitter />
          <IconFacebook />
        </div>
      </div>
      <div className="bg-sky-200 flex justify-center">
        <span className="font-semibold">© 2024 PT. Gramedia Asri Media</span>
      </div>
    </footer>
  );
}
