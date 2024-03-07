"use client";

import Footer from "@/components/footer";
import { NavbarProducts } from "@/components/navbar";

import naruto from "../../../public/cover_books/cover-naruto.jpg";
import { Trash } from "@/components/icon";

export default function Products() {
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
        <h2 className="text-2xl my-2 font-serif font-semibold">Tas Belanja</h2>
        <div className="flex gap-2 h-96">
          <div className="shadow-lg w-2/3 rounded-lg">
            <div className="flex flex-row items-center border-b-2 p-4 justify-between">
              <div className="flex">
                <div
                  className="w-16 h-24"
                  style={{
                    backgroundImage: `url(${naruto.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="ml-4">
                  <p>Naruto Bind Up Edition 02</p>
                  <span>Namikaze</span>
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
                  Rp. 79.000
                </p>
                <button className="flex gap-2 mt-2 items-center hover:text-red-700">
                  {" "}
                  <Trash />
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="shadow w-1/3 rounded-lg h-60 flex flex-col justify-between">
            <h1 className="text-4xl p-3 font-bold border-b-2">
              Rincian Belanja
            </h1>
            <div className="flex justify-between p-2 font-bold items-center">
              <p>Ringkasan Pembayaran</p>
              <span className="text-xl text-blue-600 font-semibold">
                Rp. 115.200
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
