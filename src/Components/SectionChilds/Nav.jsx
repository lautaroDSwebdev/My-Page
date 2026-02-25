import { navbar } from "../../mock/globalData"
import useNavigationHover from "../../hooks/useNavigationHover";

export const NavComponent = () => {
    const {activeSection} = useNavigationHover()
    return (
        <>
            <div>
                <nav className=" fixed  navbar-blur w-full hidden md:block mx-auto z-index-sup  alturaNav   ">
                    <div className=" flex flex-row flex-wrap h-[4rem] mx-auto items-center justify-around max-width-container ">
                        {
                            navbar.map(e => (
                                <div key={e.id} className="  div-nav1">
                                    <a className={`navAnimation cursor-pointer
                                        NavPresentacion 
                                        hover:text-[#dddcdc]   
                                        text-[1.3rem] underline-animation
                                        mx-4 ${activeSection === e.href ? "active": ""}`}
                                        href={"#"+ e.href}>{e.navOption}</a>
                                </div>
                            ))
                        }
                    </div>
                </nav>
            </div>

        </>

    )

}