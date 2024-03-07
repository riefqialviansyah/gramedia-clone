import promo2 from "../../public/banner_promo/promo2.jpg";
import promo3 from "../../public/banner_promo/promo3.jpg";
import { BannerPromo1 } from "@/components/banner";

// import cover book
import cover_naruto from "../../public/cover_books/cover-naruto.jpg";
import Footer from "@/components/footer";
import NavbarHome from "@/components/navbar";

export default function Home() {
  return (
    <>
      <NavbarHome />
      <div className="mx-10 mt-32">
        <div className="grid grid-col-3 grid-flow-col gap-2">
          <BannerPromo1 />
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
        <div className="p-2 flex gap-4 flex-wrap">
          <div className="w-52 h-80 shadow-md rounded-lg">
            <div className="border-2 w-42 p-1 h-56">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${cover_naruto.src})`,
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
              <div className="text-xs line-through italic">Rp. 60.000</div>
            </div>
          </div>
          <div className="w-52 h-80 shadow-md rounded-lg">
            <div className="border-2 w-42 p-1 h-56">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${cover_naruto.src})`,
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
              <div className="text-xs line-through italic">Rp. 60.000</div>
            </div>
          </div>
          <div className="w-52 h-80 shadow-md rounded-lg">
            <div className="border-2 w-42 p-1 h-56">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${cover_naruto.src})`,
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
              <div className="text-xs line-through italic">Rp. 60.000</div>
            </div>
          </div>
          <div className="w-52 h-80 shadow-md rounded-lg">
            <div className="border-2 w-42 p-1 h-56">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${cover_naruto.src})`,
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
              <div className="text-xs line-through italic">Rp. 60.000</div>
            </div>
          </div>
          <div className="w-52 h-80 shadow-md rounded-lg">
            <div className="border-2 w-42 p-1 h-56">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${cover_naruto.src})`,
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
              <div className="text-xs line-through italic">Rp. 60.000</div>
            </div>
          </div>
          <div className="w-52 h-80 shadow-md rounded-lg">
            <div className="border-2 w-42 p-1 h-56">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${cover_naruto.src})`,
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
              <div className="text-xs line-through italic">Rp. 60.000</div>
            </div>
          </div>
          <div className="w-52 h-80 shadow-md rounded-lg">
            <div className="border-2 w-42 p-1 h-56">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${cover_naruto.src})`,
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
              <div className="text-xs line-through italic">Rp. 60.000</div>
            </div>
          </div>
          <div className="w-52 h-80 shadow-md rounded-lg">
            <div className="border-2 w-42 p-1 h-56">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${cover_naruto.src})`,
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
              <div className="text-xs line-through italic">Rp. 60.000</div>
            </div>
          </div>
          <div className="w-52 h-80 shadow-md rounded-lg">
            <div className="border-2 w-42 p-1 h-56">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${cover_naruto.src})`,
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
              <div className="text-xs line-through italic">Rp. 60.000</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
