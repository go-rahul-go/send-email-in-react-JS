
import { createContext, useEffect, useState } from "react";
import EmailForm from "./components/EmailForm";
import Header from "./components/Header";
import DarkMode from "./components/DarkMode"
import "./Style.css"

export const ThemeContext = createContext();
function App() {
  const [isDark, changeDark] = useState("light")
  useEffect(()=>{
    if(isDark==="light")
      document.body.style.backgroundColor="white"
    else
      document.body.style.backgroundColor="#656767"
  },[isDark])
  return (
    <>
      <DarkMode theme={changeDark} />
      <ThemeContext.Provider value={isDark}>
        <Header />
        <EmailForm />
        </ThemeContext.Provider>

    </>
  )
}

export default App;
