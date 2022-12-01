import React from 'react'

export default function Background() {
  return (
    <div className="bg-slate-400" style={{height:'1000px'}}>
        <div style={{ height:'100px' }} >
            <div className="bg-sky-500/100 " style={{height:'inherit'}}></div>        
            <div className="bg-sky-500/75 " style={{height:'inherit'}}></div>        
            <div className="bg-sky-500/50 " style={{height:'inherit'}}></div>        
        </div>
    </div>
  )
}
