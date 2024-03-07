import Link from "next/link";
import AnimateCart from "./cart";
import Icon, { ChevronDown, Help } from "./icon";
import SearchForm from "./search";

export default function NavbarHome() {
  return (
    <>
      <nav className="fixed z-10 top-0 border-b  shadow-md w-full bg-white h-24s">
        <div className="bg-sky-200 flex justify-end gap-1">
          <Help />
          <span className="mr-10 hover:cursor-pointer hover:scale-105 font-bold">
            Help
          </span>
        </div>
        <div className="h-20 border flex items-center justify-between">
          <Icon />
          <Link
            href={"login"}
            className="hover:text-sky-400 mr-20 font-bold font-sans hover:cursor-pointer w-20 text-xl text-center hover:underline underline-offset-8"
          >
            Login
          </Link>
        </div>
      </nav>
    </>
  );
}

export function NavbarProducts() {
  return (
    <>
      <nav className="fixed z-10 top-0 border-b  shadow-md w-full bg-white h-24s">
        <div className="bg-sky-200 flex justify-end gap-1">
          <Help />
          <span className="mr-10 hover:cursor-pointer hover:scale-105 font-bold">
            Help
          </span>
        </div>
        <div className="h-20 border flex items-center justify-between">
          <Icon />
          <div className="flex gap-2">
            <AnimateCart />
            <Link
              href={"/add-product"}
              className="hover:text-sky-400 hover:cursor-pointer w-25 font-bold text-xl text-center hover:underline underline-offset-8"
            >
              Add Product
            </Link>
            <Link
              href={"/"}
              className="hover:text-sky-400 hover:cursor-pointer w-20 font-bold text-xl text-center hover:underline underline-offset-8 mr-20"
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
