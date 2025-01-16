import React from 'react';
import {useRef} from 'react';

const FocusInput = () => {
    const FocusElement = useRef(null);
    

    const Focusing = () => {
        FocusElement.current.focus();
        FocusElement.current.value = 'Berhasil';
    }


  return (
    <div>
      <input type='text' ref={FocusElement}/>
      <button onClick={() => Focusing()}> Focusing on text ref</button>
    </div>
  )
}

export default FocusInput
