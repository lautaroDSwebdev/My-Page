import React from 'react'
import { navbar } from './dataNav'

export const NavMobile = () => {
    return (
        <nav className=" fixed bottom-0 bg-[#0d0a0ad9] w-full md:hidden  mx-auto z-index-sup flex justify-around h-[34px]   ">
            {
                navbar.map(e => (
                    <div key={e.id} className=" ">
                        <a className="navAnimation cursor-pointer
                        NavPresentacion 
                        hover:text-[#dddcdc]   
                        text-[13px]
                        mx-4"
                            href={e.href}>{e.navOption}</a>
                    </div>
                ))
            }
        </nav>
    )
}

