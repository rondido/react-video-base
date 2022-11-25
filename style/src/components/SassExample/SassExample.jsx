import React from 'react';
import './Example.scss';

export default function SassExample() {
  return (
    <div>
        <p>Example</p>
        <p className='font'>Example</p>
        <nav>
            <ul>
                <li>123</li>
                <li>
                    <a>456</a>
                </li>
            </ul>
        </nav>
        <p className='base'>Hello,world</p>
        <p className='inverse'>Hello,world</p>
        <p className='info'>Hello,world</p>
        <p className='alert'>Hello,world</p>
        <p className='success'>Hello,world</p>
        <p className='message'>message</p>
        <p className='success2'>success2</p>
        <p className='error'>error</p>
        <p className='warning'>warning</p>
        
    </div>
  )
}
