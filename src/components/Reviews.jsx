import React from "react";
import { reviews } from "../constent";
const Reviews = () => {
  return (
    <>
      <h2 className="text-2xl uppercase text-center text-gray-500 font-bold my-3">
        Client testimonials
      </h2>
      <div className="grid sm:grid-cols-3">
        {reviews?.map((review) => (
          <div className="flex flex-col justify-center items-center px-2  py-8 text-center sm:px-1 md:px-2">
            <img className="w-20 rounded-full" src={review.image} alt="" />
            <p className="text-gray-500 py-8">{review.content}</p>
            <h4 className="text-xl font-bold text-gray-900">{review.name}</h4>
            <h6 className="text-gray-400 font-semibold pt-3">{review.job}</h6>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
