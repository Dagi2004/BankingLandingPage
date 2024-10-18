import React from "react";
import currency from "../assets/image-currency.jpg";
import confenti from "../assets/image-confetti.jpg";
import plane from "../assets/image-plane.jpg";

import restaurant from "../assets/image-restaurant.jpg";
const Blog = () => {
  return (
    <div className="py-6 " id="blog">
      <h1 className="text-3xl text-[#565285] text-center mb-3">
        Latest Articles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-8xl mx-auto">
        <div className="overflow-hidden rounded-lg  bg-white shadow-md hover:shadow-lg transition-shadow">
          <img
            src={currency}
            alt="Currency Article"
            className="w-full h-52 object-cover rounded-t-lg"
          />
          <div className="p-6">
            <p className="font-light text-[#5b4844] text-sm mb-2">
              By Claire Robinson
            </p>
            <h3 className="text-lg font-semibold text-[#565285] mb-3">
              Receive money in any currency with no fees
            </h3>

            <p className=" mb-4">
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={restaurant}
            alt="Restaurant Article"
            className="w-full h-52 object-cover rounded-t-lg"
          />
          <div className="p-6">
            <p className="font-light text-[#5b4844] text-sm mb-2">
              By Wilson Hutton
            </p>
            <h3 className="text-lg font-semibold text-[#565285] mb-3">
              Treat yourself without worrying about money
            </h3>
            <p className="text-gray-600 mb-4">
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
          <img
            src={plane}
            alt=""
            className="w-full h-52 object-cover rounded-t-lg"
          />
          <div className="p-6">
            <p className="font-light text-[#5b4844] text-sm mb-2">
              {" "}
              By Wilson Hutton
            </p>
            <h3 className="text-lg font-semibold text-[#565285] mb-3">
              {" "}
              Take your Easybank card wherever you go
            </h3>
            <p>
              {" "}
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg  bg-white shadow-md hover:shadow-lg transition-shadow">
          <img
            src={confenti}
            alt=""
            className="w-full h-52 object-cover rounded-t-lg"
          />
          <div className="p-6">
            <p className="font-light text-[#5b4844] text-sm mb-2">
              By Claire Robinson
            </p>
            <h3 className="text-lg font-semibold text-[#565285] mb-3">
              {" "}
              Our invite-only Beta accounts are now live!
            </h3>

            <p className="text-gray-600 mb-4">
              {" "}
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
