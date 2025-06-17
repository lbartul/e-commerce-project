import { useState } from "react";

const images = [
  "/img/mainimg.png",
  "/img/sliderimg.jpg"
];

export default function HomeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full" style={{ height: "850px" }}>
      <img
        src={images[currentIndex]}
        alt=""
        className="w-full h-full object-cover object-top"
      />

      <div className="flex flex-col absolute bottom-50 left-[10%] gap-y-10">
        <p className="text-white text-[20px] font-semibold">SUMMER 2025</p>
        <h1 className="text-white text-[60px] font-bold">NEW COLLECTION</h1>
        <p className="text-white text-2xl">
          We know how large objects will act, <br />
          but things on a small scale
        </p>
        <button className="text-white bg-[#2DC071] px-15 py-5 rounded-sm self-start font-bold text-[20px] hover:bg-[#25A05E] transition-colors">
          SHOP NOW
        </button>
      </div>

      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl"
      >
        ❮
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl"
      >
        ❯
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-15 h-2 rounded-md transition-all duration-300 ${
              index === currentIndex ? "bg-white/90" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
