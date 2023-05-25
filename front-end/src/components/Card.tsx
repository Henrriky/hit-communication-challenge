import React from 'react'
import Photo from '../assets/photo.png'
import MoreInfo from './MoreInfo'
import DateInfo from './DateInfo'


function Card() {
  return (
    <div className="bg-card-background-color flex gap-3 h-36 items-center rounded-[10px] max-w-[540px] px-3">
        <img src={Photo} className="max-w-[50px] max-h-[50px]"/>
        <MoreInfo/>
        <DateInfo/>     
    </div>
  )
}

export default Card