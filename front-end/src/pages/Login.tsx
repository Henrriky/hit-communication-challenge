import React from 'react'
import Logo from '../assets/logo.png';

function Login() {
  return (
    <div className="bg-background-color min-h-screen flex items-center justify-center">
        <header className="max-w-[340px] text-center flex flex-col items-center gap-1">
            <img src={Logo} className="max-w-[220px] max-w-[192px] inline-block"/>
            <h1 className="text-login-title-gray text-3xl font-bold">SCCANC SAC</h1>
            <h2 className="text-login-subtitle-gray font-medium text-lg">Faça login e gerencie seus atendimentos</h2>
        </header>
        <main>
          <form action="">
            
          </form>
        </main>
    </div>
  )
}

export default Login