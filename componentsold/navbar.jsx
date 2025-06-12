export default function NavBar() {
    return(
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
    )
}