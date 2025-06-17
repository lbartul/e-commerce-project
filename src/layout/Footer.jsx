export default function Footer() {
  return (
    <div className="flex flex-col gap-y-15 px-6 py-10 text-sm max-w-7xl mx-auto mb-20">
      {/* Bandage ve Sosyal Medya */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-20 text-left">
        <h1 className="text-2xl text-[#252B42] font-bold">Bandage</h1>
        <div className="flex gap-x-4">
          <img src="/img/fbblue.png" alt="facebook" />
          <img src="/img/igblue.png" alt="instagram" />
          <img src="/img/xblue.png" alt="x" />
        </div>
      </div>

      {/* Başlıklar ve içerikler */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-y-10 gap-x-20 justify-start md:justify-between items-start">
        <div className="flex flex-col gap-y-3 min-w-[150px]">
          <h1 className="text-xl text-[#252B42] font-bold">Company info</h1>
          <div className="flex flex-col gap-y-2 text-[#737373]">
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 min-w-[150px]">
          <h1 className="text-xl text-[#252B42] font-bold">Legal</h1>
          <div className="flex flex-col gap-y-2 text-[#737373]">
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 min-w-[150px]">
          <h1 className="text-xl text-[#252B42] font-bold">Features</h1>
          <div className="flex flex-col gap-y-2 text-[#737373]">
            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 min-w-[150px]">
          <h1 className="text-xl text-[#252B42] font-bold">Resources</h1>
          <div className="flex flex-col gap-y-2 text-[#737373]">
            <p>IOS & Android</p>
            <p>Watch a Demo</p>
            <p>Customers</p>
            <p>API</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 min-w-[250px] w-full md:w-auto">
          <h1 className="text-xl text-[#252B42] font-bold">Get In Touch</h1>
          <div className="flex w-full">
            <input 
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 border border-gray-300 flex-grow rounded-l-sm"
            />
            <button className="bg-[#23A6F0] text-white px-4 py-3 font-semibold text-sm rounded-r-sm hover:bg-white hover:text-[#23A6F0] hover:border border-[#23A6F0] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
