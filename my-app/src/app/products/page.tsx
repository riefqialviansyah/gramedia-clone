"use client";
import { CartProduct } from "@/components/cardProduct";
import Footer from "@/components/footer";
import { NavbarProducts } from "@/components/navbar";
import { IProduct } from "@/interfaces/interface";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/products");
      const result = (await response.json()) as IProduct[];
      setProducts(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <NavbarProducts />
      <div className="mx-10 mt-32">
        <div className="flex justify-center">
          <form className="w-96 flex" action="">
            <input
              className="border-none bg-gray-100 p-2 w-full rounded-xl"
              type="text"
              name="search"
              id=""
              placeholder="Cari Produk, Judul Buku, Penulis . . ."
            />
            <button className="ml-2 shadow-lg w-20 bg-slate-400 text-white btn ">
              Search
            </button>
          </form>
        </div>
        <h2 className="text-2xl my-2 font-serif font-semibold">
          Welcome to gramedia, enjoy to found your book.
        </h2>
        <div className="p-2 flex gap-4 flex-wrap">
          {products &&
            products.map((product: IProduct) => {
              return (
                <CartProduct key={String(product._id)} product={product} />
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
}
