import React, { useState } from 'react'

export default function ControlledComponent() {
    const [name, setName] = useState('');
    const [essay, setEssay] = useState('Please write an essay about your favorite DOM element.');
    const [flavor, setFlavor] = useState('coconut');
    function handleChange(event) {
        const name = event.target.name;
        const type = event.target.type;
        // if(type === "text"){
        //   setName(event.target.value);
        // }
        if(name === 'name'){
          setName(event.target.value);
        }
        if(name === 'essay'){
          setEssay(event.target.value);
        }
        if(name === 'flavor'){
          setFlavor(event.target.value);
        }
      }
    
    function handleSubmit(event) {
        alert(`name: ${name}, essay:${essay}, flavor:${flavor}`);
        event.preventDefault();
    }
    // function handleEssayChange(event) {
    //     setEssay(event.target.value);
    //     event.preventDefault();
    // }
    // function handleFlavorChange(event) {
    //     setFlavor(event.target.value);
    //     event.preventDefault();
    // }
    
  return (
    <div>
       <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name={name} value={name} onChange={handleChange} />
        </label>
        <label>
          Essay:
          <textarea name={essay} value={essay} onChange={handleChange} />
        </label>
        <br/>
        <br/>
        <label>
          Pick your favorite flavor:
          <select value={flavor} name={flavor} onChange={handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
