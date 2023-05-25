import Logo from '../assets/logo.png';
import React from 'react'

function Header() {
  return (
    <header className="max-w-[340px] text-center flex flex-col items-center gap-1">
        <img src={Logo} className="max-w-[220px] max-h-[192px] inline-block"/>
        <h1 className="text-login-title-gray text-3xl font-bold">SCCANC SAC</h1>
        <h2 className="text-login-subtitle-gray font-medium text-lg">Faça login e gerencie seus atendimentos</h2>
    </header>
  )
}

export default Header