
// import ComponentContext from './context/ComponentContext'
import { AboutMe } from './Components/AboutMe'
import { Header } from './Components/HeaderComponent'
import {  Contact, NavComponent, MobileBar, Projects } from './Components/SectionChilds'
function App() {
  return (
    // por si le quiero meter cambio de tema e idioma
      // <ComponentContext>
      // </ComponentContext>
      <div>

          <NavComponent />
          <Header />
          
          <Projects />
          <AboutMe />
          <Contact />
          <MobileBar />
      </div>
  )
}

export default App
