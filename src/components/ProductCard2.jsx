export default function ProductCard2() {
  return (
    <div className="flex flex-col  gap-y-4 w-[239px]">
        <div className="relative">
            <div className="absolute top-3 left-4">
                <p className="font-semibold text-white text-sm bg-[#E74040] rounded-sm pl-2 pr-2">Sale</p>
            </div>
            <img src="/img/productimg.png" alt="" className="w-[348px] h-[300px]" />
                <div className="absolute bottom-5 left-15 flex flex-row gap-x-3 ">
                <img src="/img/plike.png" alt="" className="w-8 h-8 rounded-full bg-white" />
                <img src="/img/pshop.png" alt=""  className="w-8 h-8 rounded-full bg-white"/>
                <img src="/img/peye.png" alt="" className="w-8 h-8 rounded-full bg-white" />
            </div>
      </div>
      <div className="flex flex-row justify-between ml-2.5 mr-2.5">
      <h2 className="text-[#23A6F0] font-semibold text-sm">English Department</h2>
        <div className="flex flex-row bg-[#252B42] rounded-full p-0.5">
         <img src="/img/staricon.png" alt="" className="w-auto h-5" />
         <p className="text-white text-sm">4.9</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 ml-2.5 mr-2.5">
        <p className="text-[#252B42] font-semibold text-sm">Graphic Design</p>
        <p className="text-[#737373] text-sm">We focus on ergonomics and meeting 
            you where you work. It's only a 
            keystroke away.</p>
        </div>
        <div className="flex flex-row gap-x-2 ml-2.5 mr-2.5">
            <img src="/img/download.png" alt="" />
            <p className="text-[#737373] text-sm">15 Sales</p>
        </div>
      <div className="ml-2.5 mr-2.5 flex flex-row">
        <span className="text-[#BDBDBD] font-bold mr-2">$16.48</span>
        <span className="text-[#23856D] font-semibold">$6.48</span>
      </div>
      <div className="flex gap-x-2 mt-2 ml-2.5 mr-2.5">
        <div className="w-5 h-5 rounded-full bg-[#23A6F0] border border-gray-300"></div>
        <div className="w-5 h-5 rounded-full bg-[#23856D] border border-gray-300"></div>
        <div className="w-5 h-5 rounded-full bg-[#E77C40] border border-gray-300"></div>
        <div className="w-5 h-5 rounded-full bg-[#252B42] border border-gray-300"></div>
      </div>
      <div className="flex flex-row gap-x-2 ml-2.5 mr-2.5">
        <img src="/img/calendar.png" alt="" />
        <p className="text-[9px]">22hr 30min</p>
        <img src="/img/chart.png" alt="" />
        <p className="text-[9px]">64 Lessons</p>
        <img src="/img/chart2.png" alt="" />
        <p className="text-[9px]">Progress</p>
      </div>
      <div className="text-[#23A6F0] bg-white rounded-full border-[#23A6F0] ml-2.5 mr-2.5">
        <button >Learn More ▶</button> 
      </div>
    </div>
  );
}
//button bg duzeltilecek
