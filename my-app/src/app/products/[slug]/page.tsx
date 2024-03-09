import Footer from "@/components/footer";
import { NavbarProducts } from "@/components/navbar";

import naruto from "../../../../public/cover_books/cover-naruto.jpg";
import { IProduct } from "@/interfaces/interface";
const baseUrl = process.env.BASE_URL;

export default async function DetailProduct({
  params,
}: {
  params: { slug: string };
}) {
  const response = await fetch(baseUrl + "products/" + params.slug);
  const product = (await response.json()) as IProduct;
  console.log(product);

  return (
    <>
      <NavbarProducts />
      <div className="mx-10 mt-32 mb-2 min-h-96 flex gap-2">
        <div className="w-64 h-80 shadow-lg">
          <div
            className="w-full h-full rounded-lg"
            style={{
              backgroundImage: `url(${product.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="w-1/2 shadow-lg p-5">
          <p className="text-xl font-base">{product.author}</p>
          <p className="text-2xl font-semibold">
            {`"`}
            {product.name}
            {`"`}
          </p>
          <p className="mt-5 font-semibold">Deskripsi Buku:</p>
          <p className="text-justify">{product.description}</p>
          <p className="mt-5 font-semibold">Excerpt:</p>
          <p className="text-justify">{product.excerpt}</p>
          <p></p>
        </div>
        <div className="w-80 h-24 shadow-lg rounded-lg flex justify-center items-center">
          <button className="bg-sky-400 w-32 h-10 text-xl font-bold rounded-lg text-white hover:-translate-y-1 hover:scale-105 duration-200">
            Add to cart
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
