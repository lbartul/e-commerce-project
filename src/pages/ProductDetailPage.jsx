import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke, faHeart, faCartShopping, faEye } from "@fortawesome/free-solid-svg-icons";
import { productImgs } from '../productimgs';

export default function ProductDetailPage() {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/productslider1.png",
    "/img/productslider2.png"
  ];

  const goNext = () => setIndex((prev) => (prev + 1) % images.length);
  const goPrev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="max-w-7xl mx-auto px-4 items-center">
  <div className="flex gap-x-4 font-semibold items-center mb-6">
    <p className="text-[#252B42]">Home</p>
    <p className="text-[#BDBDBD]">❯</p>
    <p className="text-[#BDBDBD]">Shop</p>
  </div>

  {/* SLIDER + DETAY */}
  <div className='flex flex-col lg:flex-row gap-y-10 lg:gap-x-15 mb-30 items-center lg:items-start'>

    {/* SLIDER */}
    <div className="flex flex-col items-center gap-y-4">
      <div className="relative">
        <img src={images[index]} alt="" className="w-[300px] h-[270px] sm:w-[400px] sm:h-[350px] lg:w-[506px] lg:h-[450px]" />
        <button
          onClick={goPrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-1 text-white font-bold"
        >
          ❮
        </button>
        <button
          onClick={goNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2 py-1 text-white font-bold"
        >
          ❯
        </button>
      </div>

      <div className="flex gap-x-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setIndex(i)}
            className={`w-16 h-16 object-contain cursor-pointer border rounded-md transition-opacity duration-300 ${
              index === i ? "opacity-100 border-[#23A6F0]" : "opacity-50"
            }`}
          />
        ))}
      </div>
    </div>

    {/* DETAY */}
    <div className='flex flex-col gap-y-4 items-center lg:items-start text-left lg:text-left'>
      <h2 className='text-[#252B42] font-semibold text-xl'>Floating Phone</h2>
      <div className='flex items-center'>
        <FontAwesomeIcon icon={faStar} className='text-[#F3CD03]' />
        <FontAwesomeIcon icon={faStar} className='text-[#F3CD03]' />
        <FontAwesomeIcon icon={faStar} className='text-[#F3CD03]' />
        <FontAwesomeIcon icon={faStar} className='text-[#F3CD03]' />
        <FontAwesomeIcon icon={faStarHalfStroke} className='text-[#F3CD03]' />
        <p className="ml-2">10 Reviews</p>
      </div>
      <p className='font-bold text-[#252B42] text-lg'>$1,139.33</p>
      <div className='font-semibold flex justify-center lg:justify-start'>
        <p className='text-[#737373]'>Availability :</p>
        <p className='text-[#23A6F0]'>&nbsp;In Stock</p>
      </div>
      <p className='text-[#858585] max-w-md'>
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. <br />
        RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
      </p>
      <div className="w-full h-px bg-gray-300 my-4"></div>
      <div className="flex gap-x-2 mb-15 justify-center lg:justify-start">
        <div className="w-6 h-6 rounded-full bg-[#23A6F0] border border-gray-300"></div>
        <div className="w-6 h-6 rounded-full bg-[#23856D] border border-gray-300"></div>
        <div className="w-6 h-6 rounded-full bg-[#E77C40] border border-gray-300"></div>
        <div className="w-6 h-6 rounded-full bg-[#252B42] border border-gray-300"></div>
      </div>
      <div className='flex items-center justify-center lg:justify-start gap-x-4'>
        <button className='bg-[#23A6F0] text-white font-bold rounded-sm px-6 py-3'>Select Options</button>
        <FontAwesomeIcon icon={faHeart} className='text-[#252B42]' />
        <FontAwesomeIcon icon={faCartShopping} className='text-[#252B42]' />
        <FontAwesomeIcon icon={faEye} className='text-[#000000]' />
      </div>
    </div>
  </div>

            <div className='flex flex-col items-center justify-center text-[#737373] font-semibold gap-y-4 mb-25 sm:flex-row sm:gap-x-16'>
                <p>Description</p>
                <p>Additional Information</p>
                <p>Reviews <span className='text-[#23856D]'>(0)</span></p>
            </div>

            <div className='flex flex-col gap-y-8 sm:flex-row sm:gap-x-30'>
                <img src="/img/producti.png" alt="" />
                <div className='flex flex-col gap-y-6 font-semibold'>
                    <h1 className='font-bold text-3xl text-[#252B42]'>the quick fox jumps over</h1>
                    <p className='text-[#737373]'>
                        Met minim Mollie non desert Alamo est sit <br />
                        cliquey dolor do met sent. RELIT official <br />
                        consequent door ENIM RELIT Mollie. <br />
                        Excitation venial consequent sent nostrum <br />
                        met.
                    </p>
                    <p className='text-[#737373]'>
                        Met minim Mollie non desert Alamo est sit <br />
                        cliquey dolor do met sent. RELIT official <br />
                        consequent door ENIM RELIT Mollie. <br />
                        Excitation venial consequent sent nostrum <br />
                        met.
                    </p>
                    <p className='text-[#737373]'>
                        Met minim Mollie non desert Alamo est sit <br />
                        cliquey dolor do met sent. RELIT official <br />
                        consequent door ENIM RELIT Mollie. <br />
                        Excitation venial consequent sent nostrum <br />
                        met.
                    </p>
                </div>

                <div className='flex flex-col gap-y-3 font-semibold text-[#737373]'>
                    <h1 className='font-bold text-3xl text-[#252B42] mb-4'>the quick fox jumps over</h1>
                    <p><span>❯</span> the quick fox jumps over the lazy dog</p>
                    <p><span>❯</span> the quick fox jumps over the lazy dog</p>
                    <p><span>❯</span> the quick fox jumps over the lazy dog</p>
                    <p><span>❯</span> the quick fox jumps over the lazy dog</p>

                    <div className='flex flex-col gap-y-3 mt-5'>
                        <h1 className='font-bold text-3xl text-[#252B42] mb-4'>the quick fox jumps over</h1>
                        <p><span>❯</span> the quick fox jumps over the lazy dog</p>
                        <p><span>❯</span> the quick fox jumps over the lazy dog</p>
                        <p><span>❯</span> the quick fox jumps over the lazy dog</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-10 ">
                <h2 className="text-2xl font-bold text-[#252B42] mb-12 mt-25">BESTSELLER PRODUCTS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {productImgs.slice(8, 16).map((item, index) => (
                        <div key={index} className="bg-white shadow-sm rounded-md overflow-hidden flex flex-col items-center sm:items-start ">
                            <img src={item.productimg} alt="" />
                            <div className="p-4 text-center sm:text-left">
                                <h3 className="text-[#252B42] font-bold mb-1">Graphic Design</h3>
                                <p className="text-[#737373] text-sm mb-2 font-semibold">English Department</p>
                                <div className="flex gap-x-2 justify-center sm:justify-start">
                                    <span className="text-[#BDBDBD] font-bold text-sm">$16.48</span>
                                    <span className="text-[#23856D] font-semibold text-sm">$6.48</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-7xl mx-auto mt-35 mb-24">
                    <div className="flex flex-col sm:flex-row items-center gap-x-15 gap-y-12">
                        <img src="/img/hooli.png" alt="" />
                        <img src="/img/lyft.png" alt="" />
                        <img src="/img/logog.png" alt="" />
                        <img src="/img/stripe.png" alt="" />
                        <img src="/img/amazon.png" alt="" />
                        <img src="/img/reddit.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
