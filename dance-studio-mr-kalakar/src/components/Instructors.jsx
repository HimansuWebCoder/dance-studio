export default function Instructors() {
  const instructors = [
    {
      name: "Mausumi Das",
      role: "Hip-Hop Instructor",
      image: "/images/mentor.jpeg",
      bio: "Specialist in freestyle, urban hip-hop, and choreography with 4+ years of experience.",
    },
    {
      name: "Meera Patel",
      role: "Odissi & Classical Instructor",
      image: "/images/dance.webp",
      bio: "Trained in Odissi & Hindustani dance forms, blending tradition with contemporary expression.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 ">
        {/* Heading */}
       {/* <h2 className="text-3xl md:text-3xl font-bold font-montserrat text-[#34699A] text-center mb-10">
          Meet Our <span className="text-[#1B56FD]">Instructors</span>
        </h2>*/}

        {/* Cards */}
        <div className="grid md:grid-cols-2 grid-cols-1 place-content-center gap-2 ">
          {instructors.map((inst, index) => (
            <div
              key={index}
              // className="bg-white w-[18rem] md:w-fit md:text-left text-center shadow-xl flex justify-center items-center p-2 md:flex-row flex-col rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              className="bg-white h-50 md:w-fit md:text-left text-center shadow-xl grid grid-cols-2 place-content-center place-items-center p-2  rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className=" w-[8rem] h-[8rem] md:h-[7rem] md:w-[7rem] flex justify-center items-center aspect-[1/1]">
                <img
                  src={inst.image}
                  alt={inst.name}
                  className="w-full h-full object-cover rounded-full  hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="">
                <h3 className="text-lg md:text-xl font-semibold font-poppins">{inst.name}</h3>
                <p className="text-sm md:text-md text-blue-600 font-medium font-montserrat -3">{inst.role}</p>
                <p className="md:text-md text-xs text-gray-600 font-poppins tracking-wider">{inst.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
