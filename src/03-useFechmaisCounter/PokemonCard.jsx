import React from 'react'

export const PokemonCard = ({id, name, sprites=[]}) => {
  return (

<secction style={{height:200}}>

<h2 className='text-capitalize'>#{id}-{name}</h2>

    {/*imagenes*/}
    <div>
        {
           sprites.map(sprite=>(
            <img key={sprite} src={sprite} alt={name}/>
           ))
        }
    </div>

    </secction>
  )
}
