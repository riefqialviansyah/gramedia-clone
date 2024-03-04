import Link from "next/link";

export default function Register() {
  return (
    <main className=" flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl">Register page</h1>
      <Link className="bg-yellow-500 rounded-md p-1 m-1 text-cyan-50" href="/">
        Go to home
      </Link>
    </main>
  );
}
