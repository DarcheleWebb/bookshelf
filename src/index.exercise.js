import * as React from 'react'
import {createRoot} from 'react-dom/client'
import {Logo} from './components/logo'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'

function App() {
    const [showLoginDiag, setShowLoginDiag] = React.useState(false);
    const [showRegisterDiag, setShowRegisterDiag] = React.useState(false);

    const closeLogin = () => setShowLoginDiag(false)
    const closeRegister = () => setShowRegisterDiag(false)

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
      </Dialog>

      <Dialog isOpen={showRegisterDiag} onDismiss={closeRegister}>
        <button onClick={() => closeRegister()}>Close</button>
        <h2>Register</h2>
      </Dialog>
    </div>

  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
export {root}
