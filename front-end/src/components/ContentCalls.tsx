import React from 'react'
import Card from './Card'

function ContentCalls() {
  return (
    <main className="pl-14 py-[74px] flex flex-col">
        <h1 className="text-dashboard-title-white mb-7 text-[32px] max-w-[642px]">Todos os atendimentos em aberto serão listados abaixo:</h1>
        <section className="grid grid-template-columns-540 gap-4 gap-y-7">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </section>
    </main>
  )
}

export default ContentCalls