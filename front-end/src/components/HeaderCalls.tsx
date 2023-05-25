import Exit from '../assets/exit.svg'
import { ReactComponent as Open } from '../assets/open.svg'
import { ReactComponent as Pending } from '../assets/pending.svg'
import { ReactComponent as Close } from '../assets/close.svg'
import { Button } from './Button'

function HeaderCalls() {
    return (
            <header className="flex flex-col p-8 border-r-2 border-r-login-subtitle-gray border-opacity-20 items-center pt-[74px]">
                <h2 className="text-dashboard-title-white max-w-[209px] mb-7 text-[32px]">Olá, Henrriky</h2>
                <h3 className="font-semibold text-base text-dashboard-subtitle-gray max-w-[167px] text-center mb-14 inline-block">Confira a situação dos atendimentos abaixo:</h3>
                <nav className="flex flex-col gap-4 items-center">
                    <a
                        href=""
                        className="text-base text-status-open-checked flex items-center gap-4 py-2 px-3 border-2 border-status-open-checked rounded-md w-[140px]">
                        <Open className="svg-close" />
                        Aberto
                    </a>
                    <a
                        href=""
                        className="text-base text-status-pending-unchecked flex items-center gap-4 py-2 px-3 border-2 border-status-pending-unchecked rounded-md w-[140px] hover:border-status-pending-checked hover:text-status-pending-checked ease-in duration-300">
                        <Pending />
                        Pendente
                    </a>
                    <a
                        href=""
                        className="text-base text-status-closed-unchecked flex items-center gap-4 py-2 px-3 border-2 border-status-closed-unchecked rounded-md w-[140px] hover:border-status-closed-checked hover:text-status-closed-checked transition-colors ease-in duration-300"
                    >
                        <Close />
                        Fechado
                    </a>
                </nav>
                <Button className="flex gap-2 mt-auto">
                    <img src={Exit} />
                    Sair da plataforma
                </Button>
            </header>
    )
}

export default HeaderCalls