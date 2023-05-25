import React from 'react'


function MoreInfo() {
    return (
        <div className="flex flex-col max-w-[250px]">
            <label className="font-bold text-dashboard-title-white text-xs">
                Nome do cliente:
                <span className="font-semibold text-card-subtitle-color">   Maria</span>
            </label>
            <label className="font-bold text-dashboard-title-white text-xs">
                Status:
                <span className="font-semibold text-card-subtitle-color">   Sem retorno do cliente.</span>
            </label>
            <label className="font-bold text-dashboard-title-white text-xs">
                Tipo:
                <span className="font-semibold text-card-subtitle-color">   Geral</span>
            </label>
            <label className="font-bold text-dashboard-title-white text-xs">
                Última mensagem:
                <span className="font-semibold text-card-subtitle-color">   Seu atendimento foi encerrado. Agradecemos o contato!</span>
            </label>
        </div>
    )
}

export default MoreInfo