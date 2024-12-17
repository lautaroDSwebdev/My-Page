
import { Header, Main , NavMobile } from './Components/index'
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
          <NavMobile/>
        </div>
      </ComponentContext>

    </>


  )
}

export default App
