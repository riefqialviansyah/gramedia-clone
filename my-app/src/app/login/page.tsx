import Link from "next/link";

export default function Login() {
  return (
    <main className=" flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl">Login page</h1>
      <Link className="bg-orange-400 rounded-md p-1 m-1 text-cyan-50" href="/">
        Go to home
      </Link>
    </main>
  );
}
