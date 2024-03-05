import FormLogin from "@/components/formLogin";
import Icon, { Eye } from "@/components/icon";
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
            <h1 className="text-5xl p-4">Login</h1>
            <FormLogin />
            <p className="text-center mt-2">
              Belum mendaftar? <Link href={"/register"}>Daftar</Link>
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center gap-2">
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
