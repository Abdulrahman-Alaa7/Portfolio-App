import React from "react";
import Image from "next/image";
import { aboutMeData } from "./data/data";

export default function AboutMePage() {
  return (
    <main className="flex flex-col items-center sm:mb-32 mb-16">
      <section className="flex sm:flex-row sm:w-10/12 items-center flex-col w-full">
        <div className="sm:w-1/3 w-full flex justify-center mt-12">
          <Image
            priority={false}
            width={640}
            height={960}
            src={`/images/abdulrahman-alaa.jpg`}
            alt={`Image of abdulrahman-alaa.jpg`}
            aria-label={`Image of abdulrahman-alaa.jpg`}
            className="profileImage"
          />
        </div>
        <div className="sm:ml-20 sm:mt-0  sm:w-2/3 w-full mt-6 ml-0 p-10">
          <h2 className="">{aboutMeData.title}</h2>
          <p className="text-base">{aboutMeData.body}</p>
        </div>
      </section>
      <section className="w-full bg-blue-light p-10 h-full">
        <p className="">{aboutMeData.highlightedBody}</p>
      </section>
      <section className="flex sm:flex-row sm:w-10/12 p-10 items-center w-full flex-col">
        <div className="flex flex-col  w-full mb-10 sm:mb-0 sm:w-7/12">
          <p className="">{aboutMeData.body2}</p>
        </div>
        <div className="sm:w-5/12 sm:ml-10 w-full ml-0">
          <Image
            priority={false}
            width={500}
            height={250}
            src={`/images/kaitlyn-baker-vZJdYl5JVXY-unsplash.jpg`}
            alt={`Image of kaitlyn-baker-vZJdYl5JVXY-unsplash.jpg`}
            aria-label={`Image of kaitlyn-baker-vZJdYl5JVXY-unsplash.jpg`}
            className="h-250 object-cover w-500 rounded-lg"
          />
        </div>
      </section>
    </main>
  );
}
