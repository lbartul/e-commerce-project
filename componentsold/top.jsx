export default function Top() {
  return (
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
  );
}