
export default function ProductCard() {
  return (
    <div className="flex flex-col items-center gap-y-4 w-[239px]">
      <img src="/img/productimg.png" alt="" className="w-[239px] h-[427px]" />
      <h2 className="text-[#252B42] font-semibold text-xl">Graphic Design</h2>
      <p className="text-[#737373] font-semibold text-sm">English Department</p>
      <div>
        <span className="text-[#BDBDBD] font-bold mr-2">$16.48</span>
        <span className="text-[#23856D] font-semibold">$6.48</span>
      </div>
      <div className="flex gap-x-2 mt-2">
        <div className="w-5 h-5 rounded-full bg-[#23A6F0] border border-gray-300"></div>
        <div className="w-5 h-5 rounded-full bg-[#23856D] border border-gray-300"></div>
        <div className="w-5 h-5 rounded-full bg-[#E77C40] border border-gray-300"></div>
        <div className="w-5 h-5 rounded-full bg-[#252B42] border border-gray-300"></div>
      </div>
    </div>
  );
}
