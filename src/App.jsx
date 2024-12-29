
import { Header, Main, NavMobile } from './Components/index'
import { gsap } from "gsap"
import ComponentContext from './context/ComponentContext'
import { Aboutme, Contact, NavComponent, Projects } from './Components/SectionChilds'
function App() {
  return (
      <ComponentContext>
          <NavComponent />
          <Header />
          
          <Projects />
          <Main />
          <Contact />
          <NavMobile />
      </ComponentContext>
  )
}

export default App
