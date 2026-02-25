// import { Aboutme } from "./SectionChilds/index";
import { dataApp } from "../mock/index";
import ContainerMaxWidth from "./ContainerMaxWidth";
import TitleSection from "./Titles";
import ArrayTech from "../mock/Tecnologias";

export const Main = () => {
  const about = dataApp.es.sobreMi;

  return (
    <>
      <section
        id="sobre-mi"
        className=" px-5 my-margin-secciontexto-global g-titles-sections"
      >
        <ContainerMaxWidth>
          <div className=" flex justify-start w-full  ">
            <TitleSection>Sobre mi</TitleSection>
          </div>
          <article className="w-full rounded-3xl  ">
            <p
              className="a flex justify-center w-full text-[1.3rem] my-[5px] md:text-[2rem]
                    text-titles-section-color"
            >
              {about.tecnologias}
            </p>
            <section className=" grid grid-cols-[repeat(auto-fit,minmax(7rem,1fr))] justify-center mx-auto  mb-[1rem]  gap-[10px] max-width-container">
              {ArrayTech.map((e) => (
                <div
                  key={e.id}
                  className="animacionView max flex justify-center flex-col   blue-bg-very-strong dimensiones-cajas-tech  rounded-xl shadow-tech"
                >
                  <div className="flex justify-center ">
                    <img className="ancho-imagenes-tech " src={e.img} />
                  </div>
                  <p
                    className={`text-center ${e.tecnologia ? "p-1" : ""}   text-[1rem] font-semibold text-[#fff] `}
                  >
                    {e.tecnologia}
                  </p>
                </div>
              ))}
            </section>
          </article>
        </ContainerMaxWidth>
        <article className="animacionView box-shadow-aboutme rounded-[2.4rem] blue-light-bg mx-auto w-full md:mx-auto relative top-[5rem]  mb-[13rem] max-width-container ">
          <div className="mx-auto  w-full md:grid md:grid-cols-3 ">
            <article className=" flex justify-center p-[23px] md:p-[1.6rem] w-full  text-center md:col-span-2">
              <div className="text-[1.2rem] md:text-[24px] w-[700px] texts-white  leading-8 flex flex-col gap-[2rem]  font-semibold">
                <h3
                  className="w-full  title_aboutme"
                  aria-description={about.experiencia}
                >
                  {" "}
                  {about.experiencia}
                </h3>
                <b className="leading-[30px] tracking-[2px]">
                  Queriendo encontrar un rumbo en mi vida luego de abordar
                  algunas carreras que me desinteresaban, opté por convertirme
                  en programador debido a mi cercania por las computadoras y mi
                  gusto por las matematicas, por lo cual elegí orientarme por{" "}
                  <i className="text-[#dbf537]">Programacion Web</i> en el año
                  2022.
                </b>

                <b className="leading-[30px] tracking-[2px]">
                  {" "}
                  Actualmente soy un estudioso y apasionado{" "}
                  <i className="text-[#dbf537]">Desarrollador</i> que le encanta
                  colaborar con otros desarrolladores y orientar a nuevos en
                  este frustrante pero lindo camino
                </b>
                <b className="leading-[30px] tracking-[2px]">
                  Me es muy reconfortante explicar algo que domino a alguien
                  principiante, es por eso que sigo mejorando y ayudando a mas
                  gente con mucho cariño
                </b>
                <p className="leading-[30px] tracking-[2px]"></p>
                <p className="leading-[30px] tracking-[2px]"></p>
                <p className="leading-[30px] tracking-[2px]"></p>
              </div>
            </article>
            <article className="flex justify-center flex-wrap py-[25px] content-center flex-grow">
              <img
                className="  my_selfie_style "
                src={about.selfie}
                alt="mi-selfie"
              />
            </article>
          </div>
        </article>
      </section>
    </>
  );
};
