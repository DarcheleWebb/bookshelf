import * as React from 'react'
import {createRoot} from 'react-dom/client'
import {Logo} from './components/logo'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'


function LoginForm({onSubmit, buttonText}) {

  function handleSubmit(event) {
    event.preventDefault()
    const {username, password} = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input id="username"></input>
        </div>
        <div>
          <label>Password: </label>
          <input id="password" type="password"></input>
        </div>
        <div>
          <button type="submit">{buttonText}</button>
        </div>
    </form>
  )
}

function App() {
    const [showLoginDiag, setShowLoginDiag] = React.useState(false);
    const [showRegisterDiag, setShowRegisterDiag] = React.useState(false);

    const closeLogin = () => setShowLoginDiag(false)
    const closeRegister = () => setShowRegisterDiag(false)

    function login(formData) {
      console.log('login', formData)
    }

    function register(formData) {
      console.log('register', formData)
    }

    return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => { setShowLoginDiag(true) }}>Login</button>
      </div>
      <div>
        <button onClick={() => { setShowRegisterDiag(true) }}>Register</button>
      </div>

      <Dialog isOpen={showLoginDiag} onDismiss={closeLogin}>
        <button onClick={() => closeLogin()}>Close</button>
        <h2>Login</h2>
        <LoginForm onSubmit={login} buttonText="Login"></LoginForm>
      </Dialog>

      <Dialog isOpen={showRegisterDiag} onDismiss={closeRegister}>
        <button onClick={() => closeRegister()}>Close</button>
        <h2>Register</h2>
        <LoginForm onSubmit={register} buttonText="Register"></LoginForm>
      </Dialog>
    </div>

  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
export {root}
