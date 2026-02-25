import { useState } from "react";
import { navbar } from "../../mock/globalData"
import { useEffect } from "react";

export const NavComponent = () => {
    const [activeSection, setActiveSection] = useState("");

    // Scroll spy: detecta la sección activa
    useEffect(() => {
        const handleScroll = () => {
            for (let i = navbar.length - 1; i >= 0; i--) {
                const section = document.getElementById(navbar[i].href);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 560) {
                        // console.log(rect)
                        setActiveSection(navbar[i].href);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
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
                                        text-[1.3rem]
                                        mx-4 ${activeSection === e.href ? "text-red": ""}`}
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