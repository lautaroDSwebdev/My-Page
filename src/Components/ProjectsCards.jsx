import { proyectos } from "../mock/proyectos";
import { FaCode } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
const ProjectsCards = () => {
  return (
    <section
      className="grid
     sm:grid-cols-[repeat(auto-fit,minmax(25rem,1fr))]
      gap-3"
    >
      {proyectos.map((e) => (
        <div
          className="blue-light-bg shadow-tech-desk rounded-[5px] m-3"
          key={e.id}
        >
          <div className="flex flex-wrap justify-center sm:justify-between m-2 gap-2">
            <a target="_blank" href={e.linkweb} className="">
              <div className=" border border-1 border-[#666262] rounded-lg px-3 hover:bg-[#ffffff2c]">
                <p className="title_project">{e.tituloProyecto}</p>
              </div>
            </a>
            <section className="flex flex-col justify-center items-center gap-2">
              <div className="flex cursor-pointer items-center  gap-2  blue-bg-very-strong rounded-xl  p-[10px]">
                <MdOutlineDateRange className="font-bold text-[#3fdee9] text-[1rem]"></MdOutlineDateRange>
                <p className="rounded-xl   text-center  font-bold text-[#3fdee9] text-[.6rem]">
                  {e.date}
                </p>
              </div>
              <div className="flex gap-4 justify-between py-2">
                <a href={e.linkRepo} target="_blank" rel="noopener noreferrer">
                  <FaCode className="text-[1.5rem]"></FaCode>
                </a>
                <a href={e.linkweb} target="_blank" rel="noopener noreferrer">
                  <RiExternalLinkFill className="text-[1.5rem] "></RiExternalLinkFill>
                </a>
              </div>
            </section>
          </div>

          <div className="p-3  ">
            <p className="text-[#32adb6] bg-[#c5c5c52c]  p-2 rounded-lg">
              {e.desc}
            </p>
          </div>

          <div className="flex justify-center sm:justify-start flex-row  flex-wrap gap-3 p-[1rem] w-auto">
            {e.TechUsada.map((e) => (
              <p
                key={e.id}
                className="blue-bg-very-strong rounded-xl p-2 text-center font-bold text-[#baddfa] text-[.8rem]"
              >
                {e.nombre}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectsCards;
