import React,{useState} from 'react'
import './button.css';

export default function ButtonExample() {
  const [isGreen,setIsGreen] = useState(false);

  return (
    <div>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-3">
        Button
        </button>
        
        <button className='btn-blue'>Button</button>
    </div>
  )
}

