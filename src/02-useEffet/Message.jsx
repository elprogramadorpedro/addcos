import { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Escuchar el movimiento del mouse
    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      setCoords({ x: clientX, y: clientY }); // Actualizar las coordenadas
    };

    window.addEventListener('mousemove', onMouseMove);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(coords)}
    </>
  );
};
