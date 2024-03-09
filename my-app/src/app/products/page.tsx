"use client";
import { CartProduct } from "@/components/cardProduct";
import Footer from "@/components/footer";
import { NavbarProducts } from "@/components/navbar";
import { IPagination, IProduct } from "@/interfaces/interface";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [updateData, setUpdateData] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  const [currentPage, setCurrentPage] = useState(0);
  const [stateHasMore, setStatehasMore] = useState(true);

  const searchKeyHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchKey(event.currentTarget.value);
  };

  const searchProductHandler = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/search-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(searchKey),
      });
      const result = (await response.json()) as IProduct[];
      setProducts(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/products?page=" + (currentPage + 1)
      );
      setCurrentPage(currentPage + 1);
      const result = (await response.json()) as IPagination;
      setProducts(products.concat(result.data));

      if (products.length >= result.totalData) {
        setStatehasMore(false);
        return;
      }
      // console.log(result.totalData, "<<<<<<<<<<");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <NavbarProducts updateData={updateData} setUpdateData={setUpdateData} />
      <div className="mx-10 mt-32">
        <div className="flex justify-center mb-5">
          <form className="w-96 flex" action="">
            <input
              className="border-none bg-gray-100 p-2 w-full rounded-xl"
              type="text"
              name="search"
              id=""
              placeholder="Cari Produk, Judul Buku, Penulis . . ."
              onChange={searchKeyHandler}
            />
            <button
              onClick={searchProductHandler}
              className="ml-2 shadow-lg w-20 bg-slate-400 text-white btn "
            >
              Search
            </button>
          </form>
        </div>
        <div className="p-2 flex gap-4 flex-wrap min-h-96">
          <InfiniteScroll
            dataLength={products.length}
            next={getProducts}
            style={{ display: "flex", flexWrap: "wrap", gap: 16 }}
            //To put endMessage and loader to the top.
            hasMore={stateHasMore}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {products &&
              products.map((product: IProduct) => {
                return (
                  <CartProduct
                    key={String(product._id)}
                    product={product}
                    setUpdateData={setUpdateData}
                  />
                );
              })}
          </InfiniteScroll>
        </div>
      </div>
      <Footer />
    </>
  );
}
