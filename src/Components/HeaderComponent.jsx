import { Nav } from "./Nav"
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import data from '../ObjectData/globalData.json'
import { FaUserGraduate } from "react-icons/fa6";
export const Header = () => {


  const Head = data.es.header,
    mySocialMedia = data.es.InfoSocialMedia


  // const { texto } = useContext(ContextoGlobal)

  return (
    <header id="inicio" className="bg-yoCodeando bg-fixed  bg-no-repeat bg-center  relative top-[-2rem]  bg-cover h-[104dvh] ">
      <Nav />
      <div
        className="animationWelcome absolute z-index-menor  top-[6rem] flex justify-center flex-wrap content-center flex-col m-auto w-full   h-[81dvh]">

        <div className=" flex justify-center">
          <h5 className="  text-[1.8rem] md:text-[3rem] vlg:text-[3.7rem] ">{Head.saludo}</h5>

        </div>
        <div className="flex justify-center ">
          <h1 className="   text-[9vw] md:text-[3rem]  vlg:text-[3.7rem]  " name="Lautaro Di Salvo">{Head.nombre} <b>Lautaro Di Salvo</b>
          </h1>

        </div>
        <div>
          <h2 className="es    flex flex-row flex-wrap content-center justify-center text-[8vw] md:text-[3rem]  vlg:text-[3.7rem]">
            <b className="flex flex-wrap content-center  ">

            </b>

            {Head.profesion}

            <b className="flex flex-wrap content-center">

            </b>
          </h2>


        </div>

        <div className="">
          <section className=" flex    flex-row justify-evenly gap-[1rem] pt-[6rem] md:pt-[2rem]">
            <div className="animations_icons  md:hover:scale-105 rounded-full bg-[#232222] hover:bg-[#454343] ">
              <a target="_blank" href={mySocialMedia.urlGithub}>
                <FiGithub className="text-[3.5rem] p-3" />
              </a>
            </div>
            <div className="animations_icons md:hover:scale-105  rounded-full bg-[#232222] hover:bg-[#454343] ">
              <a target="_blank" href={mySocialMedia.urlLinkedin}>
                <FaLinkedinIn className="text-[3.5rem] p-3" />
              </a>
            </div>
            <div className="animations_icons md:hover:scale-105  rounded-full bg-[#232222] hover:bg-[#454343]">
              <a href={mySocialMedia.urlCV2024} target="_blank"
              >
                <FaUserGraduate className="text-[3.5rem] p-3" />
              </a>

            </div>
          </section>
        </div>

        <section className=" flex flex-row justify-center mt-5 ">

        </section>

      </div >
    </header >


  )
}
