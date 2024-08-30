import { useRef } from 'react';

export const FocusScreen = () => {
  // Inicializa useRef con null
  const inputRef = useRef(null);

  const onClick = () => {
    if (inputRef.current) {
      inputRef.current.select(); // Selecciona el texto del input
    }
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input 
        ref={inputRef}
        type="text" 
        placeholder='Ingrese su nombre'
        className='form-control'
      />
      {/* Vincula onClick al botón */}
      <button className='btn btn-primary mt-2' onClick={onClick}>
        Set focus 
      </button>
    </>
  );
};
