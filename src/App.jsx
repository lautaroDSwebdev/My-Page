
import { Header, Main } from './Components/index'
import { gsap } from "gsap"
import ComponentContext from './context/ComponentContext'
function App() {

  const NavBar = () => {
    document.querySelector(".nav-mobile").classList.toggle("active")
  }

  return (
    <>

      <ComponentContext>

        <div className="father-component">

          <Header />
          <Main />
          {/* boton navegacion de celular */}
          <article
            className="bg-[#9e9d9df5]   backdrop-blur-3xl max-w-maximoAnchosmallwide
            md:hidden fixed  mx-auto left-7 right-7 rounded-xl bottom-3 h-[8dvh] z-index-sup  ">
            <div className="nav-button-mob w-full flex flex-wrap justify-around content-center h-[8vh] p-3">
              <img onClick={NavBar} id="boton-menu" className="w-[4rem] z-40"
                src="../../assets/icono-monitor-code.png" alt=""></img>
            </div>
          </article>

        </div>
      </ComponentContext>

    </>


  )
}

export default App
