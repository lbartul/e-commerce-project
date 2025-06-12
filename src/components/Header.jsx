export default function Header() {
    return (
        <>
        <div>
            <div className="bg-[#252B42] text-white p-4 flex justify-between items-center w-full">
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
        </div>
        <div>
            <div className="flex justify-between items-center w-full mt-4 mb-4">
                <div className="flex gap-x-4 items-center">
                    <h1 className="text-[#252B42] font-semibold ml-5 text-3xl">Bandage</h1>
                </div>
                    <div className="flex gap-x-4 items-center mr-125">
                       <a href="">Home</a>
                       <a href="">Shop</a>
                       <a href="">About</a>
                       <a href="">Blog</a>
                       <a href="">Contact</a>
                       <a href="">Pages</a>
                    </div>
                <div className="flex gap-x-10 items-center">
                    <div className="flex gap-x-4 items-center text-[#23A6F0]">
                        <img src="/img/usericon.png" alt="" />
                        <a href="">Login</a>
                        <p>/</p>
                        <a href="">Register</a>
                    </div>
                    <div className="flex gap-x-5 items-center text-2xl">
                        <img src="/img/search.png" alt="" />
                        <img src="/img/shopicon.png" alt="" />
                        <img src="/img/heart.png" alt=""  className="mr-4"/>
                    </div>
                </div>
            </div>
        </div>
    </>
    
    )
}