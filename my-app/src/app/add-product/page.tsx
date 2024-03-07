import ClientError from "@/components/error";
import Icon from "@/components/icon";
import Link from "next/link";
import { redirect } from "next/navigation";

const baseUrl = process.env.BASE_URL as string;

export default function AddProduct() {
  const addBoookHandler = async (formData: FormData) => {
    "use server";
    const author = formData.get("author");
    const name = formData.get("name");
    const slug = formData.get("slug");
    const description = formData.get("description");
    const excerpt = formData.get("excerpt");
    const price = formData.get("price");
    const tags = formData.get("tags");
    const thumbnail = formData.get("thumbnail");
    const images = formData.get("images");

    const response = await fetch(baseUrl + "add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author,
        name,
        slug,
        description,
        excerpt,
        price,
        tags,
        thumbnail,
        images,
      }),
    });

    const result = await response.json();

    if (result.message) {
      redirect("/add-product?message=" + result.message);
    }
  };

  return (
    <>
      <nav className="border-b p-3 shadow-md fixed w-full bg-white flex justify-between items-center">
        <Icon />
        <Link
          href={"products"}
          className="hover:text-sky-400 mr-20 font-bold font-sans hover:cursor-pointer w-20 text-xl text-center hover:underline underline-offset-8"
        >
          Back
        </Link>
      </nav>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mt-24">Add New Book</h1>
        <ClientError />
        <form
          className="p-4 w-1/2 shadow-lg rounded-lg"
          action={addBoookHandler}
        >
          <div className="flex flex-col gap-5">
            <div>
              <input
                className="w-full rounded-md h-10 pl-4 border-b-2"
                type="text"
                name="author"
                id=""
                placeholder="Author"
              />
            </div>
            <div>
              <input
                className="w-full rounded-md h-10 pl-4 border-b-2"
                type="text"
                name="name"
                id=""
                placeholder="Title"
              />
            </div>
            <div>
              <input
                className="w-full rounded-md h-10 pl-4 border-b-2"
                type="text"
                name="slug"
                id=""
                placeholder="Slug"
              />
            </div>
            <div className="">
              <textarea
                className="pl-4 rounded-md border-b-2"
                name="description"
                rows={2}
                cols={83}
                placeholder="Enter description here"
              ></textarea>
            </div>
            <div className="">
              <textarea
                className="pl-4 rounded-md border-b-2"
                name="excerpt"
                rows={2}
                cols={83}
                placeholder="Enter excerpt here"
              ></textarea>
            </div>
            <div>
              <input
                className="w-full rounded-md h-10 pl-4 border-b-2"
                type="number"
                name="price"
                id=""
                placeholder="Price"
              />
            </div>
            <div>
              <input
                className="w-full rounded-md h-10 pl-4 border-b-2"
                type="text"
                name="tags"
                id=""
                placeholder="Tag"
              />
            </div>
            <div>
              <input
                className="w-full rounded-md h-10 pl-4 border-b-2"
                type="text"
                name="thumbnail"
                id=""
                placeholder="Thumbnail"
              />
            </div>
            <div>
              <input
                className="w-full rounded-md h-10 pl-4 border-b-2"
                type="text"
                name="images"
                id=""
                placeholder="Images"
              />
            </div>
          </div>
          <button className="mt-6 transition duration-500 ease-in-out bg-blue-400 text-white w-full rounded-md text-2xl p-1 hover:scale-105 hover:-translate-y-1 font-bold">
            Save new book
          </button>
        </form>
      </div>
    </>
  );
}
