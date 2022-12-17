import { StatusBar } from "expo-status-bar";
import { createContext, ReactNode, useState } from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import themes from '../theme'

type Theme = 'light' | 'dark'

interface ThemeContextData {
  theme: Theme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({ children }: ThemeProviderProps) {

  const userColorScheme = useColorScheme()

  const [theme, setTheme] = useState<Theme>(userColorScheme ?? 'light')

  function toggleTheme() {
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme
    }}>
      <StyledThemeProvider theme={
        themes[theme]
      }>
        {children}
        <StatusBar 
          style={theme === 'dark' ? 'light' : 'dark'} 
          backgroundColor={themes[theme].colors.background} 
          translucent={false}
        />
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}