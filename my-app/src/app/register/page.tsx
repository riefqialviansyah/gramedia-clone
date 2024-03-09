import ClientError from "@/components/error";
import Icon from "@/components/icon";
import Link from "next/link";
import { redirect } from "next/navigation";

const baseUrl = process.env.BASE_URL as string;

export default async function Register() {
  const registerHandler = async (formData: FormData) => {
    "use server";
    const name = formData.get("name");
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch(baseUrl + "users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, username, email, password }),
    });

    const result = await response.json();
    if (result.error) {
      redirect("/register?error=" + result.error);
    }
    redirect("/login");
  };
  return (
    <>
      <Link href={"/"} className="border-b p-3 shadow-md fixed w-full bg-white">
        <Icon />
      </Link>
      <main className="flex h-screen justify-center items-center">
        <div className="p-2 shadow-lg rounded-3xl w-1/2">
          <h1 className="mt-2 mb-4 text-2xl p-1 text-center italic bg-gray-100 rounded-2xl">
            {`"A room without books is like a body without a soul"`}
          </h1>
          <ClientError />
          <form className="p-4" action={registerHandler}>
            <div className="flex flex-col gap-5">
              <div>
                <input
                  className="w-full rounded-md h-10 pl-4 border-b-2"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Full Name"
                />
              </div>
              <div>
                <input
                  className="w-full rounded-md h-10 pl-4 border-b-2"
                  type="text"
                  name="username"
                  id=""
                  placeholder="Username"
                />
              </div>
              <div>
                <input
                  className="w-full rounded-md h-10 pl-4 border-b-2"
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
            <button className="mt-6 transition duration-500 ease-in-out bg-blue-400 text-white w-full rounded-md text-2xl p-1 hover:scale-105 hover:-translate-y-1 font-bold">
              Register
            </button>
          </form>
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
