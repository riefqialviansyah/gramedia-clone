"use client";

import { useState } from "react";
import promo1_1 from "../../public/banner_promo/promo1-1.jpg";
import promo1_2 from "../../public/banner_promo/promo1-2.jpg";
import promo1_3 from "../../public/banner_promo/promo1-3.jpg";
import promo1_4 from "../../public/banner_promo/promo1-4.jpg";
import promo1_5 from "../../public/banner_promo/promo1-5.jpg";

export function BannerPromo1() {
  const [listBanner, setListBanner] = useState([
    promo1_1,
    promo1_2,
    promo1_3,
    promo1_4,
    promo1_5,
  ]);
  const [indexBanner, setIndexBanner] = useState(0);

  const nextHandler = () => {
    const totalBanner = listBanner.length;

    const newIndexBanner = indexBanner + 1;
    if (newIndexBanner > totalBanner - 1) {
      setIndexBanner(0);
    } else {
      setIndexBanner(newIndexBanner);
    }
  };

  const previousHandler = () => {
    const totalBanner = listBanner.length;

    const newIndexBanner = indexBanner - 1;
    if (newIndexBanner < 0) {
      setIndexBanner(totalBanner - 1);
    } else {
      setIndexBanner(newIndexBanner);
    }
  };

  return (
    <div
      className="flex row-span-2 col-span-2 h-96 rounded-lg relative"
      style={{
        backgroundImage: `url(${listBanner[indexBanner].src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button
        onClick={previousHandler}
        className="absolute btn btn-circle left-5 top-40"
      >
        ❮
      </button>
      <button
        onClick={nextHandler}
        className="absolute btn btn-circle right-5 top-40"
      >
        ❯
      </button>
    </div>
  );
}
