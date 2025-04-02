import React from "react";
import { assets } from "../assets/assets.js";
import { ShoppingBasket } from "lucide-react";

const Products = () => {
  return (
    <section className="container">
      <div className="flex flex-col gap-15">
        <h1 className="text-4xl max-md:text-5xl font-bold text-primary text-center">
          Products
        </h1>
        <div className="flex items-center justify-center gap-20 max-md:flex-col max-md:8">
          <div className="flex  flex-col items-center gap-5 max-md:flex-col max-md:gap-8">
            <img src={assets.prod_1} alt="Product" width={100} height={100} />
            <div className="flex gap-3">
              <h3 className="font-bold">Vorem ipsum dolor sit amet</h3>
              <p className="text-primary font-bold">20$</p>
            </div>
            <p className="text-sm text-center max-w-[200px]">
              Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <button className=" group flex items-center gap-2 border px-6 py-1 rounded-full hover:border-primary cursor-pointer ">
              <p className="group-hover:text-primary">Buy</p>
              <ShoppingBasket
                size={20}
                className="group-hover:stroke-primary"
              />
            </button>
          </div>
          <div className="flex  flex-col items-center gap-5 max-md:flex-col max-md:gap-8">
            <img src={assets.prod_2} alt="Product" width={100} />
            <div className="flex gap-3">
              <h3 className="font-bold">Vorem ipsum dolor sit amet</h3>
              <p className="text-primary font-bold">20$</p>
            </div>
            <p className="text-sm text-center max-w-[200px]">
              Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <button className=" group flex items-center gap-2 border px-6 py-1 rounded-full hover:border-primary cursor-pointer ">
              <p className="group-hover:text-primary">Buy</p>
              <ShoppingBasket
                size={20}
                className="group-hover:stroke-primary"
              />
            </button>
          </div>
          <div className="flex flex-col items-center gap-5  px-2 py-4">
            <img src={assets.prod_3} alt="Product" width={100} height={100} />
            <div className="flex gap-3">
              <h3 className="font-bold">Vorem ipsum dolor sit amet</h3>
              <p className="text-primary font-bold">20$</p>
            </div>
            <p className="text-sm text-center max-w-[200px]">
              Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <button className=" group flex items-center gap-2 border px-6 py-1 rounded-full hover:border-primary cursor-pointer ">
              <p className="group-hover:text-primary">Buy</p>
              <ShoppingBasket
                size={20}
                className="group-hover:stroke-primary"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Products;
