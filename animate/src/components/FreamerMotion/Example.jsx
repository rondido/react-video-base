import React from 'react'
import Keyframes from './Keyframes'
import Scale from './Scale'

export default function Example() {
  return (
    <div>
        <Keyframes />
        <div style={{position:'absolute', top:300,left:300}}>
        <Scale/>
        </div>
    </div>
  )
}
