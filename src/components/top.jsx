export default function Top() {
  return (
    <div className="bg-gray-800 text-white h-24 flex items-center justify-center">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-10">
          <img src="/img/mailw.png" alt="" className="w-4 h-4" />
          <p>(225) 555-0118</p>
          <p>michelle.rivera@example.com</p>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/img/mailw.png" alt="" className="w-4 h-4" />
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="flex items-center space-x-2">
          <p>Follow Us :</p>
          <img src="/img/igwhite.png" alt="" className="w-4 h-4" />
          <img src="/img/ytwhite.png" alt="" className="w-4 h-4" />
          <img src="/img/fbwhite.png" alt="" className="w-4 h-4" />
          <img src="/img/xicon.png" alt="" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
