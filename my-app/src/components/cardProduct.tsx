"use client";

import { IProduct } from "@/interfaces/interface";

interface ProductCartProps {
  product: IProduct;
}

export function CartProduct({ product }: ProductCartProps) {
  const addWishlist = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/add-wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product._id),
      });
      const result = await response.json();

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      key={String(product._id)}
      className="w-52 h-96 shadow-md rounded-lg relative"
    >
      <div className="border-2 w-42 p-1 h-72 ">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${product.thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="p-1 ml-1">
        <div className="text-sm font-light">{product.author}</div>
        <div className="text-sm font-semibold">
          {product.name.length > 25
            ? `${product.name.slice(0, 25)}.....`
            : product.name}
        </div>
        <div className="text-base text-blue-600 font-semibold">
          Rp {Number(product.price).toLocaleString("id-ID")},-
        </div>
        <button
          onClick={addWishlist}
          className="bg-sky-500 flex justify-center rounded-full items-center border text-white text-2xl font-semibold w-10 h-10 shadow-md absolute right-1 bottom-1 hover:scale-x-105 hover:-translate-y-1 duration-300"
        >
          +
        </button>
      </div>
    </div>
  );
}