import React from 'react'
import keys from '../KeysObj'
import Key from './Key'
function Piano() {
  return (
    <div className='piano'>
        {keys.map((key)=>(
            <Key keyprops={key} key={key.src}/>
        ))}
    </div>
  )
}

export default Piano 