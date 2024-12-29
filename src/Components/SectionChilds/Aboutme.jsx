// import { dataApp } from "../../mock"

import { dataApp } from "../../mock/index"
import Tech from "../../mock/Tecnologias"

const about = dataApp.es.sobreMi

export const Aboutme = () => {

    return (
        <>
            <div className=" flex justify-center w-full  ">
                <h2
                    className="my-[2rem] text-tamaño-letra-titulosDeSecciones font-bold tracking-[5px] md:text-[3rem]  text-titles-section-color">
                    {about.titulo}</h2>
            </div>
            <article className="w-full rounded-3xl  ">
                <p className="a flex justify-center w-full text-[1.3rem] my-[5px] md:text-[2rem]
                    text-titles-section-color">{about.tecnologias}</p>
                <section className=" grid grid-cols-[repeat(auto-fit,minmax(7rem,1fr))] justify-center mx-auto  mb-[1rem]  gap-[10px] max-width-container">
                    {Tech.map(e => (
                        <div key={e.id} className="animacionView max flex justify-center flex-col   blue-bg-very-strong dimensiones-cajas-tech  rounded-xl shadow-tech">
                            <div className="flex justify-center ">
                                <img className="ancho-imagenes-tech " src={e.img} />
                            </div>
                            <p className={`text-center ${e.tecnologia ? "p-1" : ""}   text-[1rem] font-semibold text-[#fff] `}>{e.tecnologia}</p>
                            <div>
                            </div>
                        </div>
                    ))}
                </section>
            </article>
        </>
    )
}
