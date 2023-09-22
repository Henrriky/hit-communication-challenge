import React, { useEffect } from 'react'
import { TicketInterface } from '../contexts/CallsContext'
import { ReactComponent as DateIcon } from '../assets/date.svg'
import Photo from '../assets/photo.png'
// import MoreInfo from './MoreInfo'
// import DateInfo from './DateInfo'


type ContentCallProps = {
  values: TicketInterface[]
}

function ContentCalls(props: ContentCallProps) {

  console.log(props.values);

  return (
    <main className="pl-14 py-[74px] flex flex-col">
      <h1 className="text-dashboard-title-white mb-7 text-[32px] max-w-[642px]">Todos os atendimentos em aberto serão listados abaixo:</h1>
      <section className="grid grid-template-columns-540 gap-4 gap-y-7">
        {
          props.values.map(ticket => {
            return (
              <div className="bg-card-background-color flex gap-3 h-36 items-center rounded-[10px] max-w-[540px] px-3" key={Math.random().toString(36).substring(7)}>
                <img src={Photo} className="max-w-[50px] max-h-[50px]" />
                <div className="flex flex-col max-w-[250px]">
                  <label className="font-bold text-dashboard-title-white text-xs">
                    Nome do cliente: 
                    <span className="font-semibold text-card-subtitle-color">   {ticket.contact.name}</span>
                  </label>
                  <label className="font-bold text-dashboard-title-white text-xs">
                    Status:
                    <span className="font-semibold text-card-subtitle-color">   {ticket.statusChatEnd}</span>
                  </label>
                  <label className="font-bold text-dashboard-title-white text-xs">
                    Tipo:
                    <span className="font-semibold text-card-subtitle-color uppercase">   {ticket.queue.name}</span>
                  </label>
                  <label className="font-bold text-dashboard-title-white text-xs">
                    Última mensagem:
                    <span className="font-semibold text-card-subtitle-color">   {ticket.lastMessage}</span>
                  </label>
                </div>
                <div className="h-full flex flex-col border-l-2 border-background-color px-3 gap-2 justify-center">
                  <div className="text-card-subtitle-color text-[14px] flex justify-center text-center mb-1">
                    <DateIcon />
                    Datas
                  </div>
                  <label className="font-bold text-dashboard-title-white text-xs">
                    Criação:
                    <span className="font-semibold text-card-subtitle-color text-[11px]">  {ticket.createdAt}</span>
                  </label>
                  <label className="font-bold text-dashboard-title-white text-xs">
                    Atualização:
                    <span className="font-semibold text-card-subtitle-color text-[11px]">  {ticket.updatedAt}</span>
                  </label>
                </div>
              </div>
            )
          })
        }
      </section>
    </main>
  )
}

export default ContentCalls