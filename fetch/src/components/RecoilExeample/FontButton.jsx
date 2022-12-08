import React from 'react'
import { useRecoilState } from 'recoil'
import { fontSizeLabelState, fontSizeState } from './store'

export default function FontButton() {
    const [fontSize,setFontSize] = useRecoilState(fontSizeState);
    const [fontSizeLabel,setfontSizeLabel] = useRecoilState(fontSizeLabelState);

  return (
    <>
    <div> Current font size:{fontSizeLabel}</div>
    <button onClick={() => setFontSize((size)=> size+1)} style={{fontSize}}>        
        Click to Enlarge
    </button>
    </>
  )
}
