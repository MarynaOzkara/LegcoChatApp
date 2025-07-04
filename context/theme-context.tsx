import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

type ThemeType = "light" | "dark" | "system";

interface ThemeContextType {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
    isDark: boolean
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "system",
    setTheme: ()=>{},
    isDark: false
})

export const ThemeProvider = ({children}:{children: React.ReactNode}) =>{
    const systemColorScheme = useColorScheme();
    const [theme, setTheme] = useState<ThemeType>("system");
    const isDark = theme === "system" ? systemColorScheme === "dark" : theme === "dark";

    useEffect(()=>{},[theme]);

    return <ThemeContext.Provider value={{theme, isDark, setTheme}}>{children}</ThemeContext.Provider>
} 
export const useTheme = () =>{
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("UseTheme must be used with ThemeProvider")
    }
    return context;
}