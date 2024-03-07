// import cover book
import Footer from "@/components/footer";
import { NavbarProducts } from "@/components/navbar";
import { Product } from "@/interfaces/interface";

const baseUrl = process.env.BASE_URL;

export default async function Products() {
  const response = await fetch(baseUrl + "products");
  const products = await response.json();

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
          {products.data &&
            products.data.map((product: Product) => {
              return (
                <div
                  key={String(product._id)}
                  className="w-52 h-80 shadow-md rounded-lg"
                >
                  <div className="border-2 w-42 p-1 h-56">
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
                    <div className="text-sm font-light">MASASHI KISHIMOTO</div>
                    <div className="text-sm font-semibold">
                      Naruto Bind Up Edition 02
                    </div>
                    <div className="text-base text-blue-600">Rp 45.000</div>
                    <div className="text-xs line-through italic">
                      Rp. 60.000
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
}
