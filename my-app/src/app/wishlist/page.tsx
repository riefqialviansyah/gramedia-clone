"use client";

import Footer from "@/components/footer";
import { NavbarProducts } from "@/components/navbar";
import { Trash } from "@/components/icon";
import { useEffect, useState } from "react";
import { IWishlist } from "@/interfaces/interface";

export default function Products() {
  const [wishlist, setWishlist] = useState<IWishlist[]>();
  const [total, setTotal] = useState(0);
  const [updateData, setUpdateData] = useState(false);

  const getWishlist = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/wishlist");
      const result = await response.json();

      setWishlist(result.data);
      setTotal(0);
      let tmpTotal = 0;
      result.data?.forEach((el: IWishlist) => {
        tmpTotal += Number(el.detailProduct.price);
      });
      setTotal(tmpTotal);
    } catch (error) {
      console.log(error);
    }
  };

  const deteleWishlist = async (wishlistId: string) => {
    try {
      await fetch("http://localhost:3000/api/delete-wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(wishlistId),
      });

      getWishlist();
      setUpdateData(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWishlist();
  }, []);

  return (
    <>
      <div>
        <NavbarProducts updateData={updateData} setUpdateData={setUpdateData} />
      </div>
      <div className="mx-10 mt-32">
        <h2 className="text-2xl my-2 font-serif font-semibold">Tas Belanja</h2>
        <div className="flex gap-2">
          <div className="shadow-lg w-2/3 rounded-lg min-h-80">
            {/* List */}
            {wishlist &&
              wishlist.map((product) => {
                return (
                  <div
                    key={String(product._id)}
                    className="flex flex-row items-center border-b-2 p-4 justify-between"
                  >
                    <div className="flex">
                      <div
                        className="w-16 h-24"
                        style={{
                          backgroundImage: `url(${product.detailProduct.thumbnail})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                      <div className="ml-4 w-80">
                        <p className="text-xl font-semibold">
                          {product.detailProduct.name.length > 25
                            ? `${product.detailProduct.name.slice(0, 25)}.....`
                            : product.detailProduct.name}
                        </p>
                        <span>{product.detailProduct.author}</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button className="bg-sky-500 flex justify-center rounded-full items-center border text-white text-2xl font-semibold w-10 h-10 shadow-md right-1 bottom-1 hover:scale-x-105 hover:-translate-y-1 duration-300">
                        -
                      </button>
                      <span className="text-3xl font-semibold">0</span>
                      <button className="bg-sky-500 flex justify-center rounded-full items-center border text-white text-2xl font-semibold w-10 h-10 shadow-md right-1 bottom-1 hover:scale-x-105 hover:-translate-y-1 duration-300">
                        +
                      </button>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-xl text-blue-600 font-semibold">
                        Rp.{" "}
                        {Number(product.detailProduct.price).toLocaleString(
                          "id-ID"
                        )}
                        , -
                      </p>
                      <button
                        onClick={() => {
                          deteleWishlist(String(product._id));
                        }}
                        className="flex gap-2 mt-2 items-center hover:text-red-700"
                      >
                        {" "}
                        <Trash />
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="shadow w-1/3 rounded-lg h-60 flex flex-col justify-between">
            <h1 className="text-3xl p-3 font-bold border-b-2">
              Rincian Belanja
            </h1>
            <div className="flex justify-between p-8 font-bold items-center">
              <p>Ringkasan Pembayaran</p>
              <span className="text-xl text-blue-600 font-semibold">
                Rp {total.toLocaleString("id-ID")}, -
              </span>
            </div>
            <div className="flex justify-center self-end w-full mb-5">
              <button className="bg-blue-600 text-white text-2xl font-semibold p-2 rounded-3xl w-5/6 hover:-translate-y-1 duration-300 hover:scale-105">
                Lanjut ke Pembayaran
              </button>
            </div>
          </div>
        </div>
        <div className="p-2 flex gap-4"></div>
      </div>
      <Footer />
    </>
  );
}
