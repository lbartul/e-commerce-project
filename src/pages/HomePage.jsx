import { productImgs } from "../productimgs"

export default function HomePage() {
    return (
        <>
            <div className="relative">
                <img src="/img/mainimg.png" alt="" />
                <div className="flex flex-col absolute bottom-80 left-70 gap-y-10">
                    <p className="text-white text-[20px] font-semibold">SUMMER 2025</p>
                    <h1 className="text-white text-[60px] font-bold">NEW COLLECTION</h1>
                    <p className="text-white text-2xl">We know how large objects will act, <br />but things on a small scale</p>
                    <button className="text-white bg-[#2DC071] px-15 py-5 rounded-sm self-start font-bold text-[20px] hover:bg-[#25A05E] transition-colors">SHOP NOW</button>
                </div>
            </div>

           <div className="flex flex-col items-center mt-20 mb-15 gap-y-2">
            <h1 className="text-2xl text-[#252B42] font-bold">EDITOR'S PICK</h1>
            <p className="text-sm text-[#737373] font-light">Problems trying to resolve the conflict between</p>
        </div>


        <div className="flex justify-center">
            <div className="flex flex-row items-center gap-4"> 
                <div className="relative">
                    <img src="/img/men.png" alt="" />
                    <button className="text-[#252B42] font-bold bg-white pt-3 pb-3 pr-15 pl-15 absolute bottom-10 left-10">MEN</button>  
                </div>
                <div className="relative">
                    <img src="/img/women.png" alt="" />  
                    <button className="absolute text-[#252B42] font-bold bg-white bottom-6 left-5 pt-3 pb-3 pr-10 pl-10">WOMEN</button>
                </div>
                <div className="flex flex-col gap-4"> 
                    <div className="relative">
                        <img src="/img/accs.png" alt="" />
                        <button className="absolute text-[#252B42] font-bold bg-white bottom-5 left-3 pt-3 pb-3 pr-15 pl-15">ACCESSORIES</button>
                    </div>
                    <div className="relative">
                        <img src="/img/kids.png" alt="" />
                        <button className="absolute text-[#252B42] font-bold bg-white bottom-5 right-23 pt-3 pb-3 pr-10 pl-10">KIDS</button>
                    </div>
                </div>
            </div>
        </div>


        <div className="flex flex-col items-center mt-50 gap-y-4 mb-20">
            <h1 className="text-xl text-[#737373] font-bold">Featured Products</h1>
            <h1 className="text-2xl text-[#252B42] font-bold">BESTSELLER PRODUCTS</h1>
            <p className="text-[25] text-[#737373] font-semibold">Problems trying to resolve the conflict between</p>
        </div>


        <div className="flex flex-col items-center px-10 py-8">
  <div className="flex justify-center gap-8 mb-8">
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

  
  <div className="flex justify-center gap-8">
    {productImgs.slice(4, 8).map((item, index) => (
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


<div className="relative bg-[#23856D] w-full h-[711px]">
    <div className="absolute top-35 left-80 flex flex-col gap-y-10">
        <p className="text-white text-[20px] font-semibold">SUMMER 2025</p>
        <h1 className="text-white text-[60px] font-bold">Vita Classic <br />Product</h1>
        <p className="text-white text-xl">We know how large objects will act, We know <br />how large objects will act, We know</p>
        <div className="flex items-center gap-x-10">
            <span className="text-white text-2xl font-bold">$16.48</span>
            <button className="text-white bg-[#2DC071] px-15 py-5 rounded-sm font-bold text-[20px] hover:bg-[#25A05E] transition-colors">ADD TO CART</button>
        </div>
    </div>
    <img src="/img/mainimg2.png" alt="" className="absolute bottom-0 right-75"/>
</div>


<div className="flex items-center justify-center gap-45 mt-1">
    <img src="/img/mainimg3.png" alt=""  />
    <div className="flex flex-col gap-10">
        <p className="text-[#BDBDBD] font-bold">SUMMER 2025</p>
        <h1 className="text-[#252B42] text-4xl font-bold">Part of the Neural <br /> Universe</h1>
        <p className="text-[#737373] text-xl">We know how large objects will act, <br /> but things on a small scale</p>
        <div className="flex gap-4">
            <button className="bg-[#2DC071] text-white font-bold rounded-sm px-12 py-4 hover:bg-[#25A05E] transition-colors">
                BUY NOW
            </button>
            <button className="bg-white text-[#2DC071] font-bold border border-[#2DC071] rounded-sm px-12 py-4 hover:bg-[#2DC071] hover:text-white transition-colors">
                READ MORE
            </button>
        </div>
    </div>
</div>


<div className="flex flex-col text-center gap-y-5 mt-30">
    <p className="text-[#23A6F0] font-bold">Practice Advice</p>
    <h1 className="text-[#252B42] text-5xl font-bold">Featured Posts</h1>
    <p className="text-[#737373] font-bold">Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics</p>
</div>
<div className="flex flex-wrap justify-center gap-x-2 p-2 mb-50">
    {/* Kart 1 */}
    <div className="relative p-4 bg-white shadow-md">
        <img src="/img/post1.png" alt=""/>
        <p className="absolute top-8 left-8 text-white bg-[#E74040] font-bold px-2 py-1 text-xs">NEW</p>
        <div className="flex text-xs font-bold gap-x-4 mt-3">
            <p className="text-[#8EC2F2]">Google</p>
            <p className="text-[#737373]">Trending</p>
            <p className="text-[#737373]">New</p>
        </div>
        <div className="flex flex-col gap-y-3 mt-3">
            <h1 className="text-[#252B42] text-xl font-bold leading-tight">Loudest à la Madison #1 <br /> (L'integral)</h1>
            <p className="text-[#737373] text-xs leading-5">We focus on ergonomics and meeting <br /> you where you work. It's only a <br /> keystroke away.</p>
        </div>
        <div className="flex items-center gap-20 mt-3 text-xs text-[#737373] mb-5">
            <div className="flex items-center gap-x-2">
                <img src="/img/calendar.png" alt="" className="h-3 w-3"/>
                <p>22 April 2021</p>
            </div>
            <div className="flex items-center gap-x-2">
                <img src="/img/chart2.png" alt="" className="h-3 w-3"/>
                <p>10 comments</p>
            </div>
        </div>
        <button className="mt-3 text-[#737373] font-bold text-xs">
            Learn More
        </button>
    </div>

    {/* Kart 2 */}
    <div className="relative p-4 bg-white shadow-md">
        <img src="/img/post2.png" alt=""/>
        <p className="absolute top-8 left-8 text-white bg-[#E74040] font-bold px-2 py-1 text-xs">NEW</p>
        <div className="flex text-xs font-bold gap-x-4 mt-3">
            <p className="text-[#8EC2F2]">Google</p>
            <p className="text-[#737373]">Trending</p>
            <p className="text-[#737373]">New</p>
        </div>
        <div className="flex flex-col gap-y-3 mt-3">
            <h1 className="text-[#252B42] text-xl font-bold leading-tight">Loudest à la Madison #1 <br /> (L'integral)</h1>
            <p className="text-[#737373] text-xs leading-5">We focus on ergonomics and meeting <br /> you where you work. It's only a <br /> keystroke away.</p>
        </div>
        <div className="flex items-center gap-20 mt-3 text-xs text-[#737373] mb-5">
            <div className="flex items-center gap-x-2">
                <img src="/img/calendar.png" alt="" className="h-3 w-3"/>
                <p>22 April 2021</p>
            </div>
            <div className="flex items-center gap-x-2">
                <img src="/img/chart2.png" alt="" className="h-3 w-3"/>
                <p>10 comments</p>
            </div>
        </div>
        <button className="mt-3 text-[#737373] font-bold text-xs">
            Learn More
        </button>
    </div>

    {/* Kart 3 */}
    <div className="relative p-4 bg-white shadow-md">
        <img src="/img/post3.png" alt=""/>
        <p className="absolute top-8 left-8 text-white bg-[#E74040] font-bold px-2 py-1 text-xs">NEW</p>
        <div className="flex text-xs font-bold gap-x-4 mt-3">
            <p className="text-[#8EC2F2]">Google</p>
            <p className="text-[#737373]">Trending</p>
            <p className="text-[#737373]">New</p>
        </div>
        <div className="flex flex-col gap-y-3 mt-3">
            <h1 className="text-[#252B42] text-xl font-bold leading-tight">Loudest à la Madison #1 <br /> (L'integral)</h1>
            <p className="text-[#737373] text-xs leading-5">We focus on ergonomics and meeting <br /> you where you work. It's only a <br /> keystroke away.</p>
        </div>
        <div className="flex items-center gap-20 mt-3 text-xs text-[#737373] mb-5">
            <div className="flex items-center gap-x-2">
                <img src="/img/calendar.png" alt="" className="h-3 w-3"/>
                <p>22 April 2021</p>
            </div>
            <div className="flex items-center gap-x-2">
                <img src="/img/chart2.png" alt="" className="h-3 w-3"/>
                <p>10 comments</p>
            </div>
        </div>
        <button className="mt-3 text-[#737373] font-bold text-xs">
            Learn More
        </button>
    </div>
</div>
                </>
            )
        }