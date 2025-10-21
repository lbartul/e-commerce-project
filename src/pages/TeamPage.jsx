export default function TeamSection() {
  const team = [
    { name: "Jacob Jones", company: "Mitsubishi" },
    { name: "Kathryn Murphy", company: "Mitsubishi" },
    { name: "Eleanor Pena", company: "Mitsubishi" },
    { name: "Marvin McKinney", company: "Mitsubishi" },
    { name: "Floyd Miles", company: "Mitsubishi" },
    { name: "Jenny Wilson", company: "Mitsubishi" },
    { name: "Ronald Richards", company: "Mitsubishi" },
    { name: "Dianne Russell", company: "Mitsubishi" },
    { name: "Devon Lane", company: "Mitsubishi" },
  ];

  return (
    <section className="py-16 bg-white">

      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-[#252B42]">Meet Our Team</h2>
        <p className="mt-2 text-[#737373] max-w-xl mx-auto">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 justify-items-center max-w-[1400px] mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className="flex items-center gap-4 w-[250px]"
          >
            <img src="/img/p3.jpg" className="w-[80px] h-[80px] rounded-full bg-gray-200 shrink-0"></img>

            <div className="flex flex-col justify-center">
              <h3 className="text-[#252B42] font-semibold leading-tight">
                {member.name}
              </h3>
              <p className="text-[#737373] text-sm">{member.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
