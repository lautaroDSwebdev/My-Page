
import { Header, Main } from './Components/index'
// import ComponentContext from './context/ComponentContext'
import {  Contact, NavComponent, MobileBar, Projects } from './Components/SectionChilds'
function App() {
  return (
      // <ComponentContext>
      // </ComponentContext>
      <div>

          <NavComponent />
          <Header />
          
          <Projects />
          <Main />
          <Contact />
          <MobileBar />
      </div>
  )
}

export default App
