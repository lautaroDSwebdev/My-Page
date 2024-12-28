<<<<<<< HEAD:public/assets/Projects.jsx
import data from '../ObjectData/globalData.json'
=======
import { dataApp } from '../../mock/index'
>>>>>>> dcf4d9605d9c7f017f99c7743fefee97693ad204:src/Components/SectionChilds/Projects.jsx
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
            {/* bg-box-sections-bgcolor shadow-tech-desk  h-[187rem] md:h-[105rem] rounded-[2.4rem] mx-5  mt-[1rem] mb-[13rem] md:mx-auto max-width-container */}
            <section className=" bg-box-sections-bgcolor shadow-tech-desk   rounded-[2.4rem] mx-5  mt-[1rem] mb-[13rem] md:mx-auto max-width-container">
                <article className="  relative top-[5px]  ">
                    {
                        dataProjects.map(e => (
                            <article key={e.id} className="animacionView mx-auto md:grid md:grid-cols-3 py-[1rem]   ">
                                <div className="active md:col-span-2 ">
                                    <a target="_blank" href={e.linkweb}>
                                        <img className=" md:cursor-pointer transition duration-75 ease-linear w-[350px] mx-auto  max-h-maximoAlto-img " src={e.imagenProyecto} alt="imagen de proyecto" />
                                    </a>
                                </div>
                                <section>
                                    <div className="">
                                        <p className="title_project">{e.tituloProyecto}</p>
                                    </div>
                                    <div className="flex justify-center flex-row  flex-wrap gap-3 h-auto w-auto">
                                        {e.TechUsada.map(e =>
                                            <p key={e.id} className="bg-[#97979f] rounded-xl p-2 text-center text-[#fff] text-[1rem]">{e.nombre}</p>
                                        )}
                                    </div>
                                    <div className=" m-4 flex justify-evenly gap-1 ">
                                        {
                                            e.linkweb ?
                                                <a target="_blank" href={e.linkweb}
                                                    className="a_links"

                                                >web</a>
                                                : ""
                                        }
                                        {
                                            e.linkRepo ?
                                                <a target="_blank"
                                                    href={e.linkRepo}
                                                    className="a_links">codigo</a>
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
