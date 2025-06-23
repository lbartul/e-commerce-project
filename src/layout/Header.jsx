import { Link } from "react-router-dom";
import { ChevronDown } from "react-feather";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            
            <div className="bg-[#252B42] text-white p-4 hidden lg:flex justify-between items-center w-full font-bold">
                <div className="flex gap-x-4 items-center">
                    <img src="/img/phone.png" alt="phone" className="w-4 h-auto" />
                    <p>(225) 555-0118</p>
                    <img src="/img/mail.png" alt="mail" className="w-4 h-auto" />
                    <p>michelle.rivera@example.com</p>
                </div>
                <div className="hidden md:flex">
                    <p>Follow Us and get a chance to win 80% off</p>
                </div>
                <div className="flex gap-x-2 items-center">
                    <p>Follow Us :</p>
                    <div className="flex gap-x-2">
                        <img src="/img/igicon.png" alt="Instagram" className="w-4 h-auto" />
                        <img src="/img/yticon.png" alt="YouTube" className="w-4 h-auto" />
                        <img src="/img/fbwhite.png" alt="Facebook" className="w-4 h-auto" />
                        <img src="/img/xwhite.png" alt="X" className="w-4 h-auto" />
                    </div>
                </div>
            </div>

            
            <div className="flex justify-between items-center w-full mt-4 mb-4 px-4">
                <h1 className="text-[#252B42] font-semibold text-3xl z-50">Bandage</h1>

                
                <div className="flex gap-x-8 items-center md:hidden">
                    <img src="/img/resshop.png" alt="user" />
                    <img src="/img/ressearch.png" alt="search" />
                    <img src="/img/resmenu.png" alt="cart" onClick={() => setOpen(!open)} className="cursor-pointer z-50" />     
                </div>

                 {open && (
                    <div className="absolute top-0 left-0 w-full min-h-screen bg-white z-40 flex flex-col items-center gap-y-6 pt-24">
                    <Link to="/" className="text-[#252B42] text-xl font-bold">Home</Link>
                    <Link to="/shop" className="text-gray-500 text-lg">Shop</Link>
                    <Link to="/about" className="text-gray-500 text-lg">About</Link>
                    <Link to="/blog" className="text-gray-500 text-lg">Blog</Link>
                    <Link to="/contact" className="text-gray-700 font-semibold text-lg">Contact</Link>
                    <Link to="/pages" className="text-gray-500 text-lg">Pages</Link>

                    <div className="flex gap-x-2 items-center text-[#23A6F0] font-semibold">
                        <img src="/img/usericon.png" alt="User" className="w-5 h-5" />
                        <a href="">Login</a>
                        <p>/</p>
                        <a href="">Register</a>
                    </div>

                    <div className="flex flex-col gap-y-4 items-center text-2xl text-[#23A6F0]">
                        <img src="/img/search.png" alt="Search" className="w-5 h-5" />
                        <div className="relative">
                        <img src="/img/shopicon.png" alt="Cart" className="w-5 h-5" />
                        </div>
                        <div className="relative">
                        <img src="/img/heart.png" alt="Wishlist" className="w-5 h-5" />
                        </div>
                    </div>
                    </div>
                )}


                
                <div className="hidden md:flex gap-x-4 items-center font-bold text-[#737373]">
                    <Link to="/" className="hover:text-[#252B42]">Home</Link>
                    <Link to="/shop" className="hover:text-[#252B42]">Shop</Link>
                    <div className="relative">
                        <div onClick={() => setOpen(!open)} className="flex items-center gap-1 cursor-pointer">
                            <ChevronDown size={20} />
                        </div>
                        {open && (
                            <div className="absolute left-0 top-full mt-3 bg-white shadow-lg rounded z-50 p-6 flex gap-20 w-[400px] h-[272px]">
                                <div className="flex flex-col gap-y-4">
                                    <button className="font-bold text-[#252B42]">Kadin</button>
                                    <button className="text-[#737373] font-bold">Bags</button>
                                    <button className="text-[#737373] font-bold">Belts</button>
                                    <button className="text-[#737373] font-bold">Cosmetics</button>
                                    <button className="text-[#737373] font-bold">Bags</button>
                                    <button className="text-[#737373] font-bold">Hats</button>
                                </div>
                                <div className="flex flex-col gap-y-4">
                                    <button className="font-bold text-[#252B42]">Erkek</button>
                                    <button className="text-[#737373] font-bold">Bags</button>
                                    <button className="text-[#737373] font-bold">Belts</button>
                                    <button className="text-[#737373] font-bold">Cosmetics</button>
                                    <button className="text-[#737373] font-bold">Bags</button>
                                    <button className="text-[#737373] font-bold">Hats</button>
                                </div>
                            </div>
                        )}
                    </div>
                    <Link to="/about" className="hover:text-[#252B42]">About</Link>
                    <Link to="/blog" className="hover:text-[#252B42]">Blog</Link>
                    <Link to="/contact" className="hover:text-[#252B42]">Contact</Link>
                    <Link to="/pages" className="hover:text-[#252B42]">Pages</Link>
                </div>

                
                <div className="hidden md:flex gap-x-10 items-center">
                    <div className="flex gap-x-4 items-center text-[#23A6F0] font-semibold">
                        <img src="/img/usericon.png" alt="" />
                        <a href="">Login</a>
                        <p>/</p>
                        <a href="">Register</a>
                    </div>
                    <div className="flex gap-x-5 items-center text-2xl">
                        <img src="/img/search.png" alt="" />
                        <img src="/img/shopicon.png" alt="" />
                        <img src="/img/heart.png" alt="" className="mr-4" />
                    </div>
                </div>
            </div>
        </>
    );
}
