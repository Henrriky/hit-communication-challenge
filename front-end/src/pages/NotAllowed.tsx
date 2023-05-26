import { Link } from 'react-router-dom';

function NotAllowed() {
  return (
    <div className="bg-background-color min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-status-closed-checked text-[32px]">Você não tem acesso a essa página :(</h1>
        <Link to="/" className="text-status-closed-checked underline text-xl">Voltar para página inicial</Link>
    </div>
  )
}

export default NotAllowed