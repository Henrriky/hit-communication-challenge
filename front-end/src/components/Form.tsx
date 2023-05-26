import { Envelope } from "phosphor-react";
import { Button } from './Button';
import React, { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { getLogin } from "../services/getLogin";
import { useNavigate } from "react-router-dom";


function Form() {

  const navigate = useNavigate();

  const { token, setToken } = useContext(AuthContext);

  const [passwordInput, setPassword] = useState("");
  const [emailInput, setEmail] = useState("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    const tokenResponse = await getLogin(emailInput, passwordInput);
    
    if(!tokenResponse) {
      alert("Usuario ou senha inválido");
      return;
    }

    setToken(tokenResponse);
    localStorage.setItem('token', tokenResponse);
    navigate("/calls");
    return;
  }


  return (
    <form className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4" onSubmit={handleSubmit} name="form">
      <label htmlFor="email" className='flex flex-col gap-3'>
        <label className='font-semibold text-login-title-gray text-base'>Endereço de e-mail</label>
        <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-login-input-gray w-full focus-within:ring-2 ring-cyan-300 '>
          <div className="w-6 h-6 text-gray-400">
            <Envelope className="w-full h-full" />
          </div>
          <input
            type="email"
            id='email'
            placeholder='Digite seu e-mail'
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            value={emailInput}
            onChange={handleEmailChange}
            className="bg-transparent flex-1 text-gray-100 text-base placeholder:text-gray-400 outline-none" />
        </div>
      </label>
      <label htmlFor="password" className='flex flex-col gap-3'>
        <label className='font-semibold text-login-title-gray text-base'>Sua senha <span className="text-gray-500 opacity-70">(Min: 4 dígitos)</span></label>
        <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-login-input-gray w-full focus-within:ring-2 ring-cyan-300'>
          <div className="w-6 h-6 text-gray-400">
            <Envelope className="w-full h-full" />
          </div>
          <input
            type="password"
            id='password'
            placeholder='**************'
            required
            pattern=".{4,}"
            value={passwordInput}
            onChange={handlePasswordChange}
            className="bg-transparent flex-1 text-gray-100 text-base placeholder:text-gray-400 outline-none" />
        </div>
      </label>
      <Button type="submit">Entrar na plataforma</Button>
    </form>
  )
}

export default Form