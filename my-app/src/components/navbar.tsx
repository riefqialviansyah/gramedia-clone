import Link from "next/link";
import AnimateCart from "./cart";
import Icon, { ChevronDown, Help } from "./icon";
import SearchForm from "./search";

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 border-b  shadow-md w-full bg-white h-24s">
        <div className="bg-sky-200 flex justify-end gap-1">
          <Help />
          <span className="mr-10 hover:cursor-pointer hover:scale-105 font-bold">
            Help
          </span>
        </div>
        <div className="h-20 border flex items-center justify-between">
          <Icon />
          <div className="hover:text-sky-400 flex hover:cursor-pointer w-20 text-lg hover:underline underline-offset-8">
            Kategori <ChevronDown />
          </div>
          <SearchForm />
          <Link
            href={"login"}
            className="hover:text-sky-400 hover:cursor-pointer w-20 text-lg text-center hover:underline underline-offset-8"
          >
            Login
          </Link>
          <AnimateCart />
        </div>
      </nav>
    </>
  );
}
