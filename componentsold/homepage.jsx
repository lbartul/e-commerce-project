export default function HomePageTest() {
    return(
        <div>
            <div className="relative">
                <img src="/img/mainimg.png" alt="" />
                <div className="flex flex-col absolute bottom-80 left-70 gap-y-10">
                    <p className="text-white text-[20px]">SUMMER 2025</p>
                    <h1 className="text-white text-[60px] font-bold">NEW COLLECTION</h1>
                    <p className="text-white text-2xl">We know how large objects will act, <br />but things on a small scale</p>
                    <button className="text-white bg-[#2DC071] px-15 py-5 rounded-sm self-start font-bold text-[20px]">SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}