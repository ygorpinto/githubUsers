import { signIn, signOut, useSession } from 'next-auth/client'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import light from '../styles/light'
import dark from '../styles/dark'
import Switch from 'react-switch'

export default function Login() {
  const [ session, loading ] = useSession()
  const [theme, setTheme] = useState(light)

  const handleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return <>
  <div>
    <Switch
    checked={theme.title === 'dark'}
    onChange={handleTheme}
    width={50}
    height={15}
    handleDiameter={20}
    uncheckedHandleIcon={<div>🌘</div>}
    />
  </div>
  <ThemeProvider theme={theme}>
    {!session && <div className="notSignIn">
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
    </div>}
    {session && <div className="signIn">
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </div>}
    </ThemeProvider>
  </>
}