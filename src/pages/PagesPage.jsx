import { Link } from "react-router-dom";

export default function PagesPage() {
  return (
    <>
      <div className="flex flex-col items-center gap-y-5 py-10">
        <h1 className="text-[#737373] font-bold">WHAT WE DO</h1>
        <p className="text-[#252B42] font-bold text-[50px]">Innovation tailored for you</p>
        <div className="flex gap-x-4">
          <Link to=""></Link>
          <button className="cursor-pointer hover:text-[#23A6F0] font-semibold">Home</button>

          <span>❯</span>

          <Link to="/team">
          <button className="cursor-pointer hover:text-[#23A6F0] font-semibold">Team</button>
          </Link>
          
        </div>  
      </div>

      <div className="flex justify-center items-center gap-5">
        <img
          src="/img/team1.png"
          alt=""
          className="w-[700px] h-[530px] object-cover"
        />

        <div className="grid grid-cols-2 gap-2">
          <img src="/img/team2.png" alt="" className="w-[361px] h-[260px] object-cover" />
          <img src="/img/team3.png" alt="" className="w-[361px] h-[260px] object-cover" />
          <img src="/img/team4.png" alt="" className="w-[361px] h-[260px] object-cover" />
          <img src="/img/team5.png" alt="" className="w-[361px] h-[260px] object-cover" />
        </div>
      </div>

      <div className="text-center py-35">
        <h1 className="text-[#252B42] font-bold text-[50px] ">Meet Our Team</h1>
      </div>

      <div className="grid grid-cols-3 gap-0 justify-items-center py-10 max-w-[1400px] mx-auto">

        <div className="flex flex-col items-center text-center">
          <img src="/img/p5.jpg" alt="profile" className="w-[329px] h-[231px] object-cover" />
          <span className="mt-4 font-semibold text-lg">Username</span>
          <span className="text-[#737373]">Profession</span>
          <div className="flex flex-row gap-5 mt-3 mb-50 ">
            <img src="/img/fbblue.png" alt="facebook" className="w-5 h-5" />
            <img src="/img/igblue.png" alt="instagram" className="w-5 h-5" />
            <img src="/img/xblue.png" alt="x" className="w-5 h-5" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src="/img/p3.jpg" alt="profile" className="w-[329px] h-[231px] object-cover" />
          <span className="mt-4 font-semibold text-lg">Username</span>
          <span className="text-[#737373]">Profession</span>
          <div className="flex flex-row gap-5 mt-3 mb-50">
            <img src="/img/fbblue.png" alt="facebook" className="w-5 h-5" />
            <img src="/img/igblue.png" alt="instagram" className="w-5 h-5" />
            <img src="/img/xblue.png" alt="x" className="w-5 h-5" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src="/img/p4.jpg" alt="profile" className="w-[329px] h-[231px] object-cover" />
          <span className="mt-4 font-semibold text-lg">Username</span>
          <span className="text-[#737373]">Profession</span>
          <div className="flex flex-row gap-5 mt-3 mb-50">
            <img src="/img/fbblue.png" alt="facebook" className="w-5 h-5" />
            <img src="/img/igblue.png" alt="instagram" className="w-5 h-5" />
            <img src="/img/xblue.png" alt="x" className="w-5 h-5" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src="/img/p6.jpg" alt="profile" className="w-[329px] h-[231px] object-cover" />
          <span className="mt-4 font-semibold text-lg">Username</span>
          <span className="text-[#737373]">Profession</span>
          <div className="flex flex-row gap-5 mt-3 mb-50">
            <img src="/img/fbblue.png" alt="facebook" className="w-5 h-5" />
            <img src="/img/igblue.png" alt="instagram" className="w-5 h-5" />
            <img src="/img/xblue.png" alt="x" className="w-5 h-5" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src="/img/p5.jpg" alt="profile" className="w-[329px] h-[231px] object-cover" />
          <span className="mt-4 font-semibold text-lg">Username</span>
          <span className="text-[#737373]">Profession</span>
          <div className="flex flex-row gap-5 mt-3 mb-50">
            <img src="/img/fbblue.png" alt="facebook" className="w-5 h-5" />
            <img src="/img/igblue.png" alt="instagram" className="w-5 h-5" />
            <img src="/img/xblue.png" alt="x" className="w-5 h-5" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src="/img/p1.jpg" alt="profile" className="w-[329px] h-[231px] object-cover" />
          <span className="mt-4 font-semibold text-lg">Username</span>
          <span className="text-[#737373]">Profession</span>
          <div className="flex flex-row gap-5 mt-3 mb-50">
            <img src="/img/fbblue.png" alt="facebook" className="w-5 h-5" />
            <img src="/img/igblue.png" alt="instagram" className="w-5 h-5" />
            <img src="/img/xblue.png" alt="x" className="w-5 h-5" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src="/img/p2.jpg" alt="profile" className="w-[329px] h-[231px] object-cover" />
          <span className="mt-4 font-semibold text-lg">Username</span>
          <span className="text-[#737373]">Profession</span>
          <div className="flex flex-row gap-5 mt-3 mb-50">
            <img src="/img/fbblue.png" alt="facebook" className="w-5 h-5" />
            <img src="/img/igblue.png" alt="instagram" className="w-5 h-5" />
            <img src="/img/xblue.png" alt="x" className="w-5 h-5" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src="/img/p4.jpg" alt="profile" className="w-[329px] h-[231px] object-cover" />
          <span className="mt-4 font-semibold text-lg">Username</span>
          <span className="text-[#737373]">Profession</span>
          <div className="flex flex-row gap-5 mt-3 mb-50">
            <img src="/img/fbblue.png" alt="facebook" className="w-5 h-5" />
            <img src="/img/igblue.png" alt="instagram" className="w-5 h-5" />
            <img src="/img/xblue.png" alt="x" className="w-5 h-5" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src="/img/p3.jpg" alt="profile" className="w-[329px] h-[231px] object-cover" />
          <span className="mt-4 font-semibold text-lg">Username</span>
          <span className="text-[#737373]">Profession</span>
          <div className="flex flex-row gap-5 mt-3 mb-50">
            <img src="/img/fbblue.png" alt="facebook" className="w-5 h-5" />
            <img src="/img/igblue.png" alt="instagram" className="w-5 h-5" />
            <img src="/img/xblue.png" alt="x" className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-y-12">
        <h1 className="text-[#252B42] font-bold text-[50px]">Start your 14 days free trial</h1>
        <p className="text-[#737373]">Met minim Mollie non desert Alamo br est sit cliquey dolor
        do met sent. RELIT official consequent.</p>
        <button className="text-white bg-[#23A6F0] font-semibold rounded-sm px-12 py-4">Try it free now</button>
        <div className="flex flex-w gap-x-4">
          <img src="/img/xblue.png" alt="" />
          <img src="/img/fbnew.png" alt="" />
          <img src="/img/instablack.png" alt="" />
          <img src="/img/linked.png" alt="" />
        </div>
      </div>
    </>
  );
}
