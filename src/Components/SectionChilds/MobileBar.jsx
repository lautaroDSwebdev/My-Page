import useNavigationHover from "../../hooks/useNavigationHover";
import { navbar } from "../../mock/globalData";

export const MobileBar = () => {
  const { activeSection } = useNavigationHover();
  return (
    <nav className="navbar-mobile-styles z-index-sup">
      {navbar.map((e) => (
        <div key={e.id} className=" ">
          <a
            className={`navAnimation cursor-pointer
                        NavPresentacion 
                        hover:text-[#dddcdc]   
                        text-[13px]
                        mx-4 truncate underline-animation ${activeSection === e.href ? "active" : ""}`}
            href={"#" + e.href}
          >
            {e.navOption}
          </a>
        </div>
      ))}
    </nav>
  );
};
