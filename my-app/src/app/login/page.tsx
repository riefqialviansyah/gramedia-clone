import Icon from "@/components/icon";
import { redirect } from "next/navigation";
import Link from "next/link";
import { cookies } from "next/headers";
import ClientError from "@/components/error";
const baseUrl = process.env.BASE_URL as string;
export const dynamic = "force-dynamic";

export default async function Login() {
  const handlerLogin = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const response = await fetch(baseUrl + "users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (result.error) {
      return redirect("/login?error=" + result.error);
    }

    cookies().set("Authorization", `Bearer ${result.data.access_token}`);

    return redirect("/products");
  };

  return (
    <>
      <Link href={"/"} className="border-b p-3 shadow-md fixed w-full bg-white">
        <Icon />
      </Link>
      <main className="flex h-screen">
        <div className="flex-1 border-r-2 flex justify-center items-center">
          <div className="w-5/6">
            <h1 className="text-2xl p-1 text-center italic bg-gray-100 rounded-2xl mb-4">
              {`"There is no friend as loyal as a book"`}
            </h1>
            <ClientError />
            <form className="p-2" action={handlerLogin}>
              <div className="flex flex-col gap-5">
                <div>
                  <input
                    className="w-full rounded-md h-12 pl-4 border-b-2"
                    type="text"
                    name="email"
                    id=""
                    placeholder="Email"
                  />
                </div>
                <div className="relative">
                  <input
                    className="w-full rounded-md h-12 pl-4 border-b-2"
                    type="password"
                    name="password"
                    id="Password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <p className="text-center my-3 hover:underline underline-offset-8 hover:text-emerald-400 hover:cursor-pointer">
                Forgot password?
              </p>
              <button className="bg-blue-400 transition duration-500 ease-in-out text-white w-full rounded-md text-2xl p-1 hover:scale-105 hover:-translate-y-1 font-bold">
                Login
              </button>
            </form>
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
