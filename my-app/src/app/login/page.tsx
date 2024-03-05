import { FormLogin } from "@/components/form";
import Icon from "@/components/icon";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <nav className="border-b p-3 shadow-md fixed w-full bg-white">
        <Icon />
      </nav>
      <main className="flex h-screen">
        <div className="flex-1 border-r-2 flex justify-center items-center">
          <div className="w-5/6">
            <h1 className="text-3xl p-1 text-center italic bg-gray-100 rounded-2xl">
              {`"There is no friend as loyal as a book"`}
            </h1>
            <FormLogin />
            <p className="text-center mt-2">
              {"Don't"} have account?{" "}
              <Link
                className="hover:underline underline-offset-8 hover:text-emerald-400"
                href={"/register"}
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center gap-4">
          <button className="border border-black p-1 rounded-lg w-80 text-center hover:bg-emerald-300">
            Login with Google
          </button>
          <p className="text-sm">Orher account</p>
          <button className="border border-black p-1 rounded-lg w-80 text-center hover:bg-emerald-300">
            Login with MyValue
          </button>
        </div>
      </main>
    </>
  );
}
