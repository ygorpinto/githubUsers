import { HomePageStyles } from "./HomePageStyles"
import Switch from 'react-switch'
import { signIn, signOut, useSession } from 'next-auth/client'
import { DefaultTheme } from "styled-components";


interface HomePageProps {
  handleTheme: () => void;
  theme: DefaultTheme;
}

export const HomePage = ({ handleTheme, theme }: HomePageProps) => {

  const [session, loading] = useSession();

  return (
    <>
      {!session &&
        <HomePageStyles>
          <h1>Github Search.</h1>
          <div className="notSignIn">
            <p>Faça login para continuar :</p>
            <button onClick={() => signIn()}>Github<img src="/github.png" /></button>
          </div>
        </HomePageStyles>}
      {session && <HomePageStyles>
        <div className="signIn">
          <header>
            <div className="switch">
              <Switch
                checked={theme.title === 'dark'}
                onChange={handleTheme}
                width={50}
                height={15}
                handleDiameter={20}
                uncheckedHandleIcon={<div>🌘</div>}
              />
            </div>
            <div className="userInfo">
              <p>Seja bem vindo, <strong>{session.user.name}</strong>.</p>
              <button onClick={() => signOut()}>Sign out</button>
            </div>
          </header>
          <section>
            <h1>Github Users</h1>
            <input type="text"
            placeholder="Digite o usuário ou Repo"
            />
          </section>
        </div>
      </HomePageStyles>}
    </>
  )
}