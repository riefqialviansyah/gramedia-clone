import { FormRegister } from "@/components/form";
import Icon from "@/components/icon";
import Link from "next/link";

export default async function Register() {
  return (
    <>
      <nav className="border-b p-3 shadow-md fixed w-full bg-white">
        <Icon />
      </nav>
      <main className="flex h-screen justify-center items-center">
        <div className="p-2 shadow-lg rounded-3xl w-1/2">
          <h1 className="mt-2 mb-4 text-2xl p-1 text-center italic bg-gray-100 rounded-2xl">
            {`"A room without books is like a body without a soul"`}
          </h1>
          <FormRegister />
          <p className="text-center">
            Already have account?{" "}
            <Link
              className="hover:underline underline-offset-8 hover:text-emerald-400"
              href={"/login"}
            >
              Login here
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
