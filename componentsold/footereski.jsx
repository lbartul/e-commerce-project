export default function Footer() {
  return (
    <div className="flex flex-col gap-y-15 px-6 py-10 text-sm max-w-7xl mx-auto mb-20">
      <div className="flex justify-between items-center mb-20">
        <h1 className="text-2xl text-[#252B42] font-bold">Bandage</h1>
        <div className="flex gap-x-4">
          <img src="/img/fbblue.png" alt="facebook" />
          <img src="/img/igblue.png" alt="instagram" />
          <img src="/img/xblue.png" alt="x" />
        </div>
      </div>
      <div className="flex flex-wrap gap-x-20 gap-y-8 justify-between">
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
        <div className="flex flex-col gap-y-3 min-w-[250px]">
          <h1 className="text-xl text-[#252B42] font-bold">Get In Touch</h1>
          <div className="flex flex-row">
            <input 
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 border border-gray-300 flex-grow" 
            />
            <button className="bg-[#23A6F0] text-white px-4 py-3 font-semibold text-sm hover:bg-white hover:text-[#23A6F0] hover:border border-[#23A6F0] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}