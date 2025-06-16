import { Link } from "react-router-dom";
import { ChevronDown } from "react-feather";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="bg-[#252B42] text-white p-4 flex justify-between items-center w-full font-bold">
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
            <div className="flex justify-between items-center w-full mt-4 mb-4">
                <div className="flex gap-x-4 items-center">
                    <h1 className="text-[#252B42] font-semibold ml-5 text-3xl">Bandage</h1>
                </div>
                <div className="flex gap-x-4 items-center relative font-bold text-[#737373]">
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
                <div className="flex gap-x-10 items-center">
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
