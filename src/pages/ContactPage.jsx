export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto relative mb-20">
      <img
        src="/img/contactimg.png"
        alt=""
        className="w-full object-cover max-h-[400px] sm:max-h-[600px]"
      />
      <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center gap-y-8 px-4">
        <h1 className="font-bold text-3xl sm:text-5xl text-[#252B42]">
          Questions & Answers
        </h1>
        <p className="text-[#737373] font-semibold text-sm sm:text-base">
          Problems trying to resolve the conflict between the two <br className="hidden sm:block" />
          major realms of Classical physics:
        </p>
        <button className="font-bold text-[#23A6F0] cursor-pointer">
          CONTACT US
        </button>
      </div>
    </div>
  );
}
