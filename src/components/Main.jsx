import React from "react";
import { section } from "../constent";

const Main = () => {
  console.log(section);
  return (
    <div className="grid sm:grid-cols-2">
      {section?.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="text-center bg-slate-50 relative"
        >
          {section.image != "" && (
            <div>
              <img className="sm:hidden w-full" src={section.image.mobile} />
              <img
                className="hidden sm:block w-full"
                src={section.image.desktop}
              />
            </div>
          )}
          {section.title != "" && (
            <div
              className={`  ${
                section.id > 3
                  ? "absolute top-0  lg:top- left-0 right-0  bottom-0"
                  : "px-4 py-2 h-[350px]"
              }   flex flex-col justify-center sm:h-full `}
            >
              <h2 className={section.class.h}>{section.title}</h2>
              <p className={` ${section.class.p}`}>{section.content}</p>
              <a
                className="text-xl font-bold uppercase underline text-blue-950 transition ease-in-out duration-200 hover:text-blue-900 "
                href="#"
              >
                {section.link}
              </a>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default Main;
