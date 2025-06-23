import { productImgs } from "../productimgs"


export default function ShopPage() {
  return (
    <div>

      <div className="flex flex-col sm:flex-row items-center max-w-7xl mx-auto px-6 py-10 flex justify-between items-center ">
        <h1 className="text-[#252B42] font-semibold text-3xl">Shop</h1>
        <div className="flex gap-x-4 font-bold">
          <p className="text-[#252B42]">Home</p>
          <p className="text-[#BDBDBD]">❯</p>
          <p className="text-[#BDBDBD]">Shop</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
  <div className="flex flex-col sm:flex-row gap-x-6 gap-y-6 items-center">
    <img src="/img/media1.png" alt="" className="w-[290px] h-[253px]" />
    <img src="/img/media2.png" alt="" className="w-[290px] h-[253px]" />
    <img src="/img/media3.png" alt="" className="w-[290px] h-[253px]" />
    <img src="/img/media4.png" alt="" className="w-[290px] h-[253px]" />
    <img src="/img/media5.png" alt="" className="w-[290px] h-[253px]" />
  </div>
</div>


      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto mt-[100px] mb-12 px-4 md:px-0">
  {/* Mobile: Showing (üstte) - Desktop: Sol */}
  <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
    <p className="text-[#737373] font-semibold">
      Showing all 12 results
    </p>
  </div>

  {/* Mobile: Views (ortada) - Desktop: Orta */}
  <div className="flex items-center justify-center gap-x-6 mb-4 md:mb-0">
    <p className="text-[#737373] font-semibold">Views:</p>
    <div className="flex gap-2">
      <img src="/img/viewi2.png" alt="" className="w-5 h-5" />
      <img src="/img/viewi.png" alt="" className="w-5 h-5" />
    </div>
  </div>

  {/* Mobile: Filter alanı (altta) - Desktop: Sağ */}
  <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-2">
    <select className="border border-gray-300 rounded px-6 py-3 max-w-[200px] md:w-auto text-center md:text-left">
      <option value="default">Popularity</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
    <button className="text-white bg-[#23A6F0] font-bold py-3 px-6 rounded max-w-[200px] md:w-auto">
      Filter
    </button>
  </div>
</div>

        <div className="flex flex-col items-center px-10 py-8">
  <div className="flex flex-wrap flex-col gap-8 mb-8 md:flex-row md:justify-center">
    {productImgs.slice(0, 4).map((item, index) => (
      <div className="flex flex-col items-center gap-y-4 w-[239px]" key={index}>
        <img src={item.productimg} alt="" className="w-[239px] h-[427px]" />
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
    ))}
  </div>

  <div className="hidden md:flex flex-wrap flex-col gap-8 md:flex-row md:justify-center">
    {productImgs.slice(4, 8).map((item, index) => (
      <div className="flex flex-col items-center gap-y-4 w-[239px]" key={index}>
        <img src={item.productimg} alt="" className="w-[239px] h-[427px]" />
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
    ))}
  </div>

  <div className="hidden md:flex flex-wrap flex-col gap-8 md:flex-row md:justify-center">
    {productImgs.slice(0, 4).map((item, index) => (
      <div className="flex flex-col items-center gap-y-4 w-[239px]" key={index + 4}>
        <img src={item.productimg} alt="" className="w-[239px] h-[427px]" />
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
    ))}
  </div>
</div>

<div className="max-w-7xl mx-auto">

  <div className="flex justify-center mt-10">
  <div className="flex border border-gray-300 rounded overflow-hidden text-sm font-medium">
    <button className="px-6 py-8 text-gray-400 bg-white border-r border-gray-300 cursor-not-allowed font-semibold">
      First
    </button>
    <button className="px-6 py-8 bg-white border-r border-gray-300">1</button>
    <button className="px-6 py-8 bg-[#23A6F0] text-white border-r border-gray-300">
      2
    </button>
    <button className="px-6 py-8 bg-white border-r border-gray-300">3</button>
    <button className="px-6 py-8 text-[#23A6F0] bg-white font-semibold">Next</button>
  </div>
</div>

</div>

<div className="max-w-7xl mx-auto mt-35 mb-24">
  <div className="flex flex-col sm:flex-row items-center gap-x-21 gap-y-12">
    <img src="/img/hooli.png" alt="" />
    <img src="/img/lyft.png" alt="" />
    <img src="/img/logog.png" alt="" />
    <img src="/img/stripe.png" alt="" />
    <img src="/img/amazon.png" alt="" />
    <img src="/img/reddit.png" alt="" />
  </div>
</div>


    </div>
  );
}
