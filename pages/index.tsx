import { signIn, signOut, useSession } from 'next-auth/client'

export default function Login() {
  const [ session, loading ] = useSession()

  return <>
    {!session && <div className="notSignIn">
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
    </div>}
    {session && <div className="signIn">
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </div>}
  </>
}