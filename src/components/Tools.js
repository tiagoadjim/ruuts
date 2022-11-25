import React from 'react'

const Tools = ({action}) => {
  return (
    <div style={{position: 'relative', zIndex: 2000, display: 'flex', flexDirection: 'column', width: '100px', top: 75, gap: 5}}>
        <button onClick={() => action('marker')}>Crear marker</button>
        <button onClick={() => action('poligono')}>Crear Poligono</button>
        <button onClick={() => action(null)}>No hacer nada</button>
        

    </div>
  )
}

export default Tools