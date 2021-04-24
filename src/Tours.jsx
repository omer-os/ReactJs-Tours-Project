import React, { useState } from 'react'
import './App.css'

export default function Tours({notInterested ,tour ,name ,id ,image ,info, price}) {

    const [infoText, setInfoText] = useState(info.slice(0,170)+'...')
    const [showing, setShowing] = useState(true)


    const seeMore = ()=>{
        setInfoText(info)
        setShowing(false)
    }

    const showLess = ()=>{
        setInfoText(info.slice(0,170)+'...')
        setShowing(true)
    }


    return (
        <div className='tour'>
            <button className='deleteButton' onClick={()=>{notInterested(id)}}>not interested</button>

            <div className="tourName">{name}</div>
            
            <img className='tourImage' src={image} alt=""/>


            <div className="tourInfo">{infoText}
            
            { showing && <i onClick={seeMore}> see more</i> }
            { !showing && <i onClick={showLess}>show less</i> }

            
            </div>
        </div>
    )
}
