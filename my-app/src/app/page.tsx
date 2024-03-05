import Navbar from "@/components/navbar";
import promo1 from "../../public/banner_promo/promo1.jpg";
import promo2 from "../../public/banner_promo/promo2.jpg";
import promo3 from "../../public/banner_promo/promo3.jpg";
import { Contoh } from "@/components/icon";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="border-2 mx-10 mt-32">
        <div className="grid grid-col-3 grid-flow-col gap-2">
          <div
            className="flex row-span-2 col-span-2 h-96 rounded-lg"
            style={{
              backgroundImage: `url(${promo1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* test buat banner promo pakai komponen Image */}
            {/* <Contoh /> */}
          </div>
          <div
            className="bg-lime-300 rounded-lg"
            style={{
              backgroundImage: `url(${promo2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="bg-blue-700 rounded-lg"
            style={{
              backgroundImage: `url(${promo3.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <h2 className="text-3xl my-2 font-medium">
          Rekomendation Gramedia For You
        </h2>
        <div className="h-96 p-4">
          <div className="border-2 w-40 p-1 h-56">
            <div>Cover Book</div>
          </div>
        </div>
      </div>
    </>
  );
}
