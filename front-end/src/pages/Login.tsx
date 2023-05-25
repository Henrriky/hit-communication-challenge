import Logo from '../assets/logo.png';
import { Envelope, Lock } from "phosphor-react";
import { Button } from '../components/Button';

function Login() {
  return (
    <div className="bg-background-color min-h-screen flex flex-col items-center justify-center">
        <header className="max-w-[340px] text-center flex flex-col items-center gap-1">
            <img src={Logo} className="max-w-[220px] max-w-[192px] inline-block"/>
            <h1 className="text-login-title-gray text-3xl font-bold">SCCANC SAC</h1>
            <h2 className="text-login-subtitle-gray font-medium text-lg">Faça login e gerencie seus atendimentos</h2>
        </header>
        <form className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4" action="">
          <label htmlFor="email" className='flex flex-col gap-3'>
            <label className='font-semibold text-login-title-gray text-base'>Endereço de e-mail</label>
            <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-login-input-gray w-full focus-within:ring-2 ring-cyan-300'>
                <div className="w-6 h-6 text-gray-400">
                  <Envelope className="w-full h-full"/>
                </div>
                <input type="email" id='email' placeholder='Digite seu e-mail'  className="bg-transparent flex-1 text-gray-100 text-sm placeholder:text-gray-400 outline-none"/>
            </div>
          </label>
          <label htmlFor="password" className='flex flex-col gap-3'>
            <label className='font-semibold text-login-title-gray text-base'>Sua senha</label>
            <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-login-input-gray w-full focus-within:ring-2 ring-cyan-300'>
                <div className="w-6 h-6 text-gray-400">
                  <Envelope className="w-full h-full"/>
                </div>
                <input type="password" id='password' placeholder='**************'  className="bg-transparent flex-1 text-gray-100 text-sm placeholder:text-gray-400 outline-none"/>
            </div>
          </label>
          <Button type="submit" className='mt-4'>Entrar na plataforma</Button>
        </form>

    </div>
  )
}

export default Login