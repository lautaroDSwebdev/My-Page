import { FaWhatsapp } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { dataApp } from "../../mock/index";

export const Contact = () => {
    const schema = yup.object({
        email: yup.string().required(),
        nombreYapellido: yup.string().required(),
        contactarmePara: yup.string().required(),
        celular: yup.number().required(),
    }).required();

    const Submited = () => {
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
    }



    const contactO = dataApp.es.contacto

    return (
        <>
            <div className=" flex justify-center w-full ">
                <h2 id="contacto" className="g-titles-sections lg-titles-sections   font-bold tracking-[5px]  text-[2rem] md:text-[3rem]   text-titles-section-color">
                    {contactO.Contacto}</h2>
            </div>

            <section className="animacionView my-margin-secciones-global md:grid md:grid-cols-2 mt-[1rem]
            mb-[6rem] blue-light-bg rounded-xl mx-[1rem] md:mx-auto p-[1rem] 
            max-width-container box-shadow-form">

                <div className=" md:grid md:place-items-center">


                    <article>
                        <div className="flex justify-center w-[62%] mx-auto">

                            <b className="text-center text-[1.2rem] text-pretty  leading-[3rem]  md:text-[2rem]">{contactO.agradecimiento} !</b>
                        </div>


                        <article className="my-[4rem]  mx-auto max-width ">
                            <div className=" gap-5 flex justify-center w-full ">

                                <div className="flex justify-center flex-col cursor-pointer">
                                    <div className="flex justify-center p-[3px]">

                                        <a href="https://api.whatsapp.com/send?phone=5492494379804" target="_blank">

                                            <FaWhatsapp className="h-auto w-[3rem] drop-shadow-2xl text-[#45e753]" />
                                        </a>
                                    </div>
                                </div>

                                <div className="flex justify-center flex-col">
                                    <div className="flex justify-center ">
                                        <a href="mailto:lautarodisalvo5@gmail.com">

                                            <MdAttachEmail className="h-auto w-[3rem] drop-shadow-2xl text-[#f73e3e]" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </article>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} action="https://formspree.io/f/xzbnapnk" method="POST" className="flex flex-col justify-center">

                    <input className="claseTexto form-inputs-style  p-[1rem] "
                        type="text" name="last name" id="last name" {...register("nombreYapellido")} placeholder={contactO.nombreYapellido} />
                    <i className="text-[#e72d2d] text-center " >{errors?.nombreYapellido?.message && "Ingrese su nombre y apellido ❗"}</i>

                    <input className="claseEmail form-inputs-style  p-[1rem] "
                        type="email" name="email" id="email" {...register("email")} placeholder="Email" />
                    <p className="text-[#e72d2d] text-center ">{errors?.email?.message && "Ingresar email ❗"}</p>

                    <input className="claseTel form-inputs-style  p-[1rem] "
                        type="tel" name="number" id="number" {...register("celular")} placeholder="Celular" />
                    <p className="text-[#e72d2d] text-center ">{errors?.celular?.message && "Ingresa tu celular ❗"}</p>
                    <textarea className="claseTextArea form-inputs-style h-[150px] min-h-[140px]  p-[1rem]  "
                        name="message" id="message" cols="30" rows="10"
                        {...register("contactarmePara")}
                        placeholder={contactO.razonContacto}

                    ></textarea>

                    <p className="text-[#e72d2d] text-center ">{errors.contactarmePara?.message && "Pon la razon para colaborar, por favor"}</p>

                    <button onClick={Submited} type="submit" className=" form-inputs-style buttons p-2  w-fit mx-auto  h-fit ">{contactO.enviar}</button>
                </form>

            </section>
        </>
    )
}
