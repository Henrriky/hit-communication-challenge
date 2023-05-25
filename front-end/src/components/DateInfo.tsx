import React from 'react'
import { ReactComponent as DateIcon } from '../assets/date.svg'

function DateInfo() {
    return (
        <div className="h-full flex flex-col border-l-2 border-background-color px-3 py-10 gap-2">
            <div className="text-card-subtitle-color text-[14px] flex justify-center text-center mb-1">
                <DateIcon />
                Datas
            </div>
            <label className="font-bold text-dashboard-title-white text-xs">
                Criação:
                <span className="font-semibold text-card-subtitle-color text-[11px]">  11/04/2023 - 18:03</span>
            </label>
            <label className="font-bold text-dashboard-title-white text-xs">
                Atualização:
                <span className="font-semibold text-card-subtitle-color text-[11px]">  11/04/2023 - 18:03</span>
            </label>
        </div>
    )
}

export default DateInfo