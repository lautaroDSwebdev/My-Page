import { navbar } from "../dataNav"
export const NavComponent = () => {

    const clickOptions = () => {
        document.querySelector(".nav-mobile").classList.toggle("active")
    }
    return (
        <>
            <div>
                <nav className=" fixed bg-[#0d0a0ad9] w-full hidden md:block mx-auto z-index-sup  alturaNav   ">
                    <div className=" flex flex-row flex-wrap h-[4rem] mx-auto items-center justify-around max-width-container ">
                        {
                            navbar.map(e => (
                                <div key={e.id} className="  div-nav1">
                                    <a className="navAnimation cursor-pointer
                                        NavPresentacion 
                                        hover:text-[#dddcdc]   
                                        text-[1.3rem]
                                        mx-4"
                                        href={e.href}>{e.navOption}</a>
                                </div>
                            ))
                        }
                    </div>
                </nav>
            </div>

        </>

    )

}