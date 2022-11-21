import React from 'react'
import { createPortal } from 'react-dom'
import ThankyouDialog from './ThankyouDialog'

const Protal = (props) =>{
    return createPortal(props.children, document.getElementById('portal'))
}
export default function Example() {
  return (
    <div>
        <Protal onClick={() => console.log('div')}>
        <ThankyouDialog/>
        </Protal>
        <div style={{position:'absolute'}}>
            <button>하하하하하</button>
        </div>
    </div>
  )
}
