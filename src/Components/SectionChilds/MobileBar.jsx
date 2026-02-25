import { navbar } from "../../mock/globalData"

export const MobileBar = () => {
    return (
        <nav className="navbar-blur z-index-sup">
            {
                navbar.map(e => (
                    <div key={e.id} className=" ">
                        <a className="navAnimation cursor-pointer
                        NavPresentacion 
                        hover:text-[#dddcdc]   
                        text-[13px]
                        mx-4 truncate"
                            href={"#"+ e.href}>{e.navOption}</a>
                    </div>
                ))
            }
        </nav>
    )
}

