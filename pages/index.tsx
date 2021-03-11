import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import light from '../styles/light'
import dark from '../styles/dark'
import { HomePage } from '../components/HomePage/HomePage'
import { GlobalStyle } from '../styles/global'

export default function Home() {
  const [theme, setTheme] = useState(light)

  const handleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return <>
  <GlobalStyle/>
  <ThemeProvider theme={theme}>
    <HomePage
    theme = {theme} 
    handleTheme={handleTheme}/>
    </ThemeProvider>
  </>
}