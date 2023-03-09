/** @jsx jsx */
import {jsx} from '@emotion/core'

import 'bootstrap/dist/css/bootstrap-reboot.css'
import '@reach/dialog/styles.css'
import * as React from 'react'
import {createRoot} from 'react-dom/client'
import {Button, Input, FormGroup} from './components/lib'
import {Modal, ModalContents, ModalOpenButton} from './components/modal'
import {Logo} from './components/logo'

function LoginForm({onSubmit, submitButton}) {
  function handleSubmit(event) {
    event.preventDefault()
    const {username, password} = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form 
      onSubmit={handleSubmit}
      css={{     
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        '> div': {
          margin: '10px auto',
          width: '100%',
          maxWidth: '300px'},
        }}
      >
      {/* 🐨 these div elements could be a FormGroup you create in components/lib */}
      {/* 🐨 and the inputs elements could be custom styled Input components too */}
      <FormGroup>
        <label htmlFor="username">Username</label>
        <input id="username" />
      </FormGroup>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div>{React.cloneElement(submitButton, {type: 'submit'})}</div>
    </form>
  )
}

function App() {
  function login(formData) {
    console.log('login', formData)
  }

  function register(formData) {
    console.log('register', formData)
  }

  // 🐨 this div could use a css prop to get its children rendered nicer
  // 🎨
  //    display: 'flex',
  //    flexDirection: 'column',
  //    alignItems: 'center',
  //    justifyContent: 'center',
  //    width: '100%',
  //    height: '100vh',
  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      {/*
        🐨 the two buttons are too close, let's space them out
          🎨 apply this to the div right below
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gridGap: '0.75rem',
      */}
      {/* 🐨 And make sure to use the new Button component for all these buttons */}
      <div>
        <Modal>
          <ModalOpenButton>
            <button variant="primary">Login</button>
          </ModalOpenButton>
          <ModalContents aria-label="Login form" title="Login">
            <LoginForm
              onSubmit={login}
              submitButton={<button variant="primary">Login</button>}
            />
          </ModalContents>
        </Modal>
        <Modal>
          <ModalOpenButton>
            <button variant="secondary">Register</button>
          </ModalOpenButton>
          <ModalContents aria-label="Registration form" title="Register">
            <LoginForm
              onSubmit={register}
              submitButton={<button variant="secondary">Register</button>}
            />
          </ModalContents>
        </Modal>
      </div>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
export {root}
