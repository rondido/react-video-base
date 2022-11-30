import React from 'react'
import AlertDismissible from './AlertDismissible'
import ButtonExample from './ButtonExample'
import CarouselExample from './CarouselExample'
import GridExample from './GridExample'
import MyModalExample from './MyModalExample'

export default function ReactBootstrapExample() {
  return (
    <div>
      <MyModalExample />
        <br/>
        <CarouselExample />
        <ButtonExample/>
        <br/>
        <GridExample/>
        <br/>
        <AlertDismissible/>
        <br/>
        
    </div>
  )
}
