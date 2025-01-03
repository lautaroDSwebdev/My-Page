
import { Aboutme} from "./SectionChilds/index"
import { dataApp } from "../mock/index"


export const Main = () => {


    const about = dataApp.es.sobreMi

    return (
        <>
            <section id="sobremi" className=" lg:pt-[5rem] pt-[1rem] px-5 my-margin-secciontexto-global ">
            <Aboutme />
                <article
                    className="animacionView box-shadow-aboutme rounded-[2.4rem] blue-light-bg mx-auto w-full md:mx-auto relative top-[5rem]  mb-[13rem] max-width-container ">

                    <div className="mx-auto  w-full md:grid md:grid-cols-3 ">

                        <article className=" flex justify-center p-[23px] md:p-[1.6rem] w-full  text-center md:col-span-2">
                            <p className="text-[1.2rem] md:text-[24px] texts-white  leading-8   font-semibold">
                                <b className="w-full text-[2rem]    md:text-[2rem] " aria-description={about.experiencia}>
                                    {about.experiencia}</b>
                                <br />
                                <br />
                                {about.aprendoYmejoro}
                                <br />
                                <br />
                                {about.aprendoYmejoro2}
                            </p>
                        </article>
                        <article className="flex justify-center flex-wrap py-[25px] content-center flex-grow">
                            <img className="  my_selfie_style "
                                src={about.selfie} alt="mi-selfie" />
                        </article>
                    </div>
                </article>
            </section>
        </>
    )
}
