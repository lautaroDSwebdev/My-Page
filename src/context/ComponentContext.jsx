import { createContext, useState } from "react"
import  data  from '../ObjectData/globalData.json'

export const ProveedorContexto = createContext()

const ComponentContext = ({children}) => {
    const initialLanguage = "es"

    const LanguagePage = data

    const [language, setLanguage] = useState(initialLanguage)
    const [texto, setTexto] = useState(LanguagePage[language])
  
  
    const HandleLang = (e) => {
  
      if (e.target.value === "es") {
        setLanguage("es")
        setTexto(LanguagePage.es)
      } else {
        setLanguage("en")
        setTexto(LanguagePage.en)
  
      }
  
    }

  return (
    <ProveedorContexto.Provider value={{}}>
      {children}
    </ProveedorContexto.Provider>
  )
}

export default ComponentContext