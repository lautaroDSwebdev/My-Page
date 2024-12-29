import { dataApp } from '../../mock/index'
import '../SectionChilds/stylesProjects.css'

const dataProjects = dataApp.es.proyectos

export const Projects = () => {

    return (
        <>

            <div className=" flex justify-center w-full ">
                <h2 id="proyectos"
                    className="lg:pt-[5rem] pt-[2rem]  font-bold tracking-[5px]  text-[2rem] md:text-[3rem] text-titles-section-color">
                    Proyectos</h2>
            </div>
            <section className=" blue-light-bg shadow-tech-desk   rounded-[2.4rem] mx-5  mt-[1rem] mb-[13rem] md:mx-auto max-width-container">
                <article className="  relative top-[5px]  ">
                    {
                        dataProjects.map(e => (
                            <article key={e.id} className="animacionView mx-auto md:grid md:grid-cols-3 py-[1rem]   ">
                                <div className="active md:col-span-2 ">
                                    <a target="_blank" href={e.linkweb}>
                                        <img className=" md:cursor-pointer px-3 transition duration-75 ease-linear w-[350px] mx-auto  max-h-maximoAlto-img " src={e.imagenProyecto} alt="imagen de proyecto" />
                                    </a>
                                </div>
                                <section>
                                    <a target="_blank" href={e.linkweb}>
                                        <div className="">
                                            <p className="title_project">{e.tituloProyecto}</p>
                                        </div>
                                    </a>

                                    <i className='text-[#a1aceb] font-bold text-[30px] flex justify-center'>{e.en_proceso ? "En proceso" : ""}</i>

                                    <div className="flex justify-center flex-row  flex-wrap gap-3 h-auto w-auto">
                                        {e.TechUsada.map(e =>
                                            <p key={e.id} className="blue-bg-very-strong rounded-xl p-2 text-center text-[#fff] text-[1rem]">{e.nombre}</p>
                                        )}
                                    </div>
                                    <div className=" m-4 flex justify-evenly gap-1 ">
                                        {
                                            e.linkweb ?
                                                <a target="_blank" href={e.linkweb}
                                                    className="buttons"

                                                >web</a>
                                                : ""
                                        }
                                        {
                                            e.linkRepo ?
                                                <a target="_blank"
                                                    href={e.linkRepo}
                                                    className="buttons">codigo</a>
                                                : ""
                                        }

                                    </div>
                                </section>
                            </article>
                        ))
                    }
                </article>

            </section>
        </>
    )
}
