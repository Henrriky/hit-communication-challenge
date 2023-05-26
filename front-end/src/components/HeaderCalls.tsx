import Exit from '../assets/exit.svg'
import { ReactComponent as Open } from '../assets/open.svg'
import { ReactComponent as Pending } from '../assets/pending.svg'
import { ReactComponent as Close } from '../assets/close.svg'
import { Button } from './Button'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { CallsContext } from '../contexts/CallsContext'

function HeaderCalls() {

    const { token, setToken } = useContext(AuthContext);

    const { activeStatus, setActiveStatus } = useContext(CallsContext);

    return (
            <header className="flex flex-col p-8 border-r-2 border-r-login-subtitle-gray border-opacity-20 items-center pt-[74px]">
                <h2 className="text-dashboard-title-white max-w-[209px] mb-7 text-[32px]">HIT</h2>
                <h3 className="font-semibold text-base text-dashboard-subtitle-gray max-w-[167px] text-center mb-14 inline-block">Confira a situação dos atendimentos abaixo:</h3>
                <nav className="flex flex-col gap-4 items-center">
                    <a
                        onClick={() => { setActiveStatus("open")}}
                        className={`text-base flex items-center gap-4 py-2 px-3 border-2 ${activeStatus === "open" ? "border-status-open-checked text-status-open-checked" : "border-status-open-unchecked text-status-open-unchecked"} rounded-md w-[140px] cursor-pointer`}>
                        <Open className="svg-close"/>
                        Aberto
                    </a>
                    <a
                        onClick={() => { setActiveStatus("pending")}}
                        className={`text-base flex items-center gap-4 py-2 px-3 border-2 ${activeStatus === "pending" ? "border-status-pending-checked text-status-pending-checked" : "border-status-pending-unchecked text-status-pending-unchecked"} cursor-pointer rounded-md w-[140px] hover:border-status-pending-checked hover:text-status-pending-checked ease-in duration-300`}>
                        <Pending />
                        Pendente
                    </a>
                    <a
                        onClick={() => { setActiveStatus("close")}}
                        className={`text-base flex items-center gap-4 py-2 px-3 border-2 cursor-pointer ${activeStatus === "close" ? "border-status-closed-checked text-status-closed-checked" : "border-status-closed-unchecked text-status-closed-unchecked"} rounded-md w-[140px] hover:border-status-closed-checked hover:text-status-closed-checked transition-colors ease-in duration-300`}>
                        <Close />
                        Fechado
                    </a>
                </nav>
                <Button className="flex gap-2 mt-auto" 
                    onClick={() => { 
                                setToken("");
                                localStorage.removeItem("token");
                            }}>
                    <img src={Exit} />
                    Sair da plataforma
                </Button>
            </header>
    )
}

export default HeaderCalls