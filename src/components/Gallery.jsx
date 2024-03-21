import React from "react";
import { subsectionImages } from "../constent";
const Gallery = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4">
      {subsectionImages?.map((gallery) => (
        <div key={gallery.id}>
          <img className="sm:hidden" src={gallery.image.mobile} alt="" />
          <img className="hidden sm:block" src={gallery.image.desktop} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
