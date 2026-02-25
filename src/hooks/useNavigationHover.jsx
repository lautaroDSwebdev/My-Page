import { useEffect, useState } from "react";
import { navbar } from "../mock";

const useNavigationHover = () => {
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
return {
    activeSection
}
}

export default useNavigationHover
