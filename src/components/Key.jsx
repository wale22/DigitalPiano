import React, { useEffect, useState } from 'react'

export default function Key({keyprops}){
    const [active, setActive]=useState(false)
    const playSound=()=>{
        const sound = new Audio(keyprops.src)
        sound.currentTime=0
        sound.play()
        setActive(true)
        sound.addEventListener('ended',()=>{
            setActive(false)
        })
    }
  
    useEffect(()=>{
        document.addEventListener('keydown', (e)=>{
            if (e.key === keyprops.keydown){
                playSound()
            }
        })
    })
    return (
        <div className={active?keyprops.keyColor+' active':keyprops.keyColor}>
            <span>{keyprops.note}</span>
            <span>{keyprops.keydown}</span>
        </div>
    )
}
