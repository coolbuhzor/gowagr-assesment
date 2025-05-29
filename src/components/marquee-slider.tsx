import React from "react";
import Image from "next/image";

const sliderItems = [
  { label: "Dribble", src: "/assets/svg/dribble.svg" },
  { label: "Shots", src: "/assets/svg/shot.svg" },
  { label: "Tackles", src: "/assets/svg/tackle.svg" },
  { label: "GOALIE-SAVES", src: "/assets/svg/goalie.svg" },
];

// Repeat items 4x to simulate infinite loop appearance
const repeatedItems = Array(4).fill(sliderItems).flat();

function Slider() {
  return (
    <div id="infinite" className="slider bg-light-green">
      <div className="border-y border-black bg-light-green slider-container">
        <ul className="slider-track">
          {repeatedItems.map(({ label, src }, index) => (
            <li key={`${label}-${index}`} className="slider-item">
              <div className="font-black text-4xl flex items-center gap-x-5 uppercase tracking-widest w-fit text-black">
                <span
                  className={
                    label === "GOALIE-SAVES" ? "whitespace-nowrap w-full" : ""
                  }
                >
                  {label}
                </span>
                <Image src={src} alt={label} width={30} height={30} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Slider;
