import { MdOutlineDateRange } from "react-icons/md";
import { proyectos } from "../../mock/proyectos";
import TitleSection from "../Titles";
import { FaCode } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";

export const Projects = () => {
  return (
    <div  id="proyectos" className="max-width-container mx-auto">
      <div
        
        className=" flex justify-start w-full g-titles-sections"
      >
        <TitleSection>Proyectos</TitleSection>
      </div>
      <section
        id="proyectos"
        className="grid sm:grid-cols-[repeat(auto-fit,minmax(25rem,1fr))]  gap-3 "
      >
        {proyectos.map((e) => (
          <div
            key={e.id}
            className="blue-light-bg shadow-tech-desk rounded-[5px] mx-3 p-3"
          >
            <div className="flex flex-wrap justify-between  m-1 ">
              <a target="_blank" href={e.linkweb}>
                <div
                  className={` rounded-lg  p-[10px]
                     hover:bg-[#ffffff2c] ${e.linkweb === undefined ? "cursor-not-allowed" : ""}`}
                >
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
                  <a
                    href={e.linkRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaCode className="text-[1.5rem]"></FaCode>
                  </a>
                  {e.linkweb ? (
                    <a
                      href={e.linkweb}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiExternalLinkFill className="text-[1.5rem] "></RiExternalLinkFill>
                    </a>
                  ) : 
                    <a
                      href={e.linkweb}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* <RiExternalLinkFill className="text-[1.5rem] "></RiExternalLinkFill> */}
                    </a>
                  
                  
                  }
                </div>
              </section>
            </div>

            <div className="  ">
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
    </div>
  );
};
