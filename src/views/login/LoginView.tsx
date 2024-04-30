import Form from '@/components/form/Form'
import React from 'react'
import style from './loginView.module.css'
import Input from '@/components/input/Input'

const LoginView = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Form className={style.form} >
              <h1>Login</h1>
              <Input type='text' placeholder="Username" name="username" />
              <Input type='password' placeholder="Password" name="password" />
              <button>Login</button>
        </Form>

    </div>
    
  )
}

export default LoginView
