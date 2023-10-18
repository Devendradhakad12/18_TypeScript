import { ReactNode, createContext, useState } from "react";

type ThemeType = "dark" | "light";
interface ThemeProviderInterface {
  theme: ThemeType;
  toggleTheme: () => void

}

export const themeContext = createContext<ThemeProviderInterface>({
  theme: "dark",
  toggleTheme: () => { }
})

const ContextProvider = ({ children }: { children: ReactNode }) => {

  const [theme, setTheme] = useState<ThemeType>("dark")
  const toggleTheme = () => {
    setTheme((pre) => pre === "dark" ? "light" : "dark")
  }

  return <themeContext.Provider value={{theme, toggleTheme}}>
    {children}
    
  </themeContext.Provider>
}

export default ContextProvider 