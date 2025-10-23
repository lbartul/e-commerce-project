export default function AboutPage() {
  return (
   <>
      <div className="flex text-start justify-center items-center mt-35 gap-x-30">
        <div className="flex flex-col gap-y-10">
          <h1 className="text-[#252B42] font-bold">ABOUT COMPANY</h1>
          <h1 className="text-[#252B42] font-bold text-5xl">ABOUT US</h1>
          <p className="text-[#737373] font-bold text-xl">We know how large objects will act, <br /> 
          but things on a small scale</p>
          <button className="text-white bg-[#23A6F0] font-semibold rounded-sm mr-40 py-4">Get Quote Now</button>
        </div>
        <img src="/img/about.png" alt="" className="w-[821px] h-[468px]" />
      </div>

      <div className="max-w-[1200px] mx-auto mt-45">
        <div className="flex pb-5">
          <p className="text-[#E74040] font-semibold">Problems trying</p>
        </div>
        <div className="flex  justify-between items-center">
          <p className="text-[#252B42] font-bold text-2xl">Met minim Mollie non desert <br /> Alamo est sit cliquey dolor do <br /> met sent.</p>
          <p className="text-[#737373] font-semibold text-m">Problems trying to resolve the conflict between the two major realms of <br /> Classical physics: Newtonian mechanics </p>
        </div>
      </div>

      <div className="flex flex-row justify-between text-center max-w-[1200px] mx-auto py-40">
        <section>
          <span className="text-[#252B42] font-bold text-6xl">15K</span>
          <p className="text-[#737373] font-semibold">Happy Customers</p>
        </section>

        <section>
          <span className="text-[#252B42] font-bold text-6xl">150K</span>
          <p className="text-[#737373] font-semibold">Monthly Visitors</p>
        </section>

        <section>
          <span className="text-[#252B42] font-bold text-6xl">15</span>
          <p className="text-[#737373] font-semibold">Countries Worldwide</p>
        </section>

        <section>
          <span className="text-[#252B42] font-bold text-6xl">100+</span>
          <p className="text-[#737373] font-semibold">Top Partners</p>
        </section>
      </div>


      {/* Video player simdilik resim olarak eklendi */}
      <div className="flex max-w-[1200px] mx-auto py-40 justify-center">
          <img src="/img/videocard.png" alt="" className="w-[989px] h-[540px]" />
      </div>

      <section className="flex flex-col items-center text-center gap-y-4">
          <h1 className="text-[#252B42] font-bold text-4xl">Meet Our Team</h1>
          <p className="text-[#737373] font-semibold">Problems trying to resolve the conflict between <br /> 
          the two major realms of Classical physics: Newtonian mechanics </p>
        </section>


      <div className="grid grid-cols-3 gap-0 justify-items-center py-10 max-w-[1300px] mx-auto py-40">

        <div className="flex flex-col items-center text-center">
            <img src="/img/p3.jpg" alt="profile" className="w-[329px] h-[231px] object-cover" />
            <span className="mt-4 font-semibold text-lg">Username</span>
            <span className="text-[#737373]">Profession</span>
            <div className="flex flex-row gap-5 mt-3 mb-50 ">
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
          <img src="/img/p6.jpg" alt="profile" className="w-[329px] h-[231px] object-cover" />
          <span className="mt-4 font-semibold text-lg">Username</span>
          <span className="text-[#737373]">Profession</span>
          <div className="flex flex-row gap-5 mt-3 mb-50">
            <img src="/img/fbblue.png" alt="facebook" className="w-5 h-5" />
            <img src="/img/igblue.png" alt="instagram" className="w-5 h-5" />
            <img src="/img/xblue.png" alt="x" className="w-5 h-5" />
          </div>
        </div>

     </div>


     <div className="flex flex-col">
        <section className="flex flex-col items-center text-center gap-y-12">
          <h1 className="text-[#252B42] font-bold text-4xl">Big Companies Are Here</h1>
          <p className="text-[#737373] font-semibold">Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics </p>
        </section>

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
   </>  
    
  );
}
