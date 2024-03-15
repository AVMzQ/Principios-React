import '../style/task.css';
import React, { useState } from 'react';

export function TaskCard({ tarea }) {
    // Usamos el estado local para controlar si la tarea está completa o no
    const [completada, setCompletada] = useState(tarea);
    // Función para cambiar el estado de la tarea
    const cambiarEstadoTarea = () => {
        // Cambiamos el estado utilizando el método setCompletada de useState
        setCompletada(!completada);
    };
    return (
        <div className='card'>
            <h1 className='Tema'>Mi primera tarea</h1>
            {/* Utilizamos el estado 'completada' para determinar el color del texto */}
            <span style={{ color: completada ? 'lightgreen' : 'white' }}>
                {/* Utilizamos 'completada' para determinar el texto a mostrar */}
                {completada ? 'Tarea finalizada!' : 'Tarea pendiente.'}
            </span>
            {/* Llamamos a la función 'cambiarEstadoTarea' cuando se hace clic en el botón */}
            <button onClick={cambiarEstadoTarea}>Cambiar estado de la tarea</button>
        </div>
    );
}