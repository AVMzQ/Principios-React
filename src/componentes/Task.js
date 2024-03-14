import '../style/task.css';
export function TaskCard({tarea}){
    return <div className='card'>
        <h1>Mi primera tarea</h1>
        <span style= {tarea ? {color:'lightgreen'} : {color: 'white'}}>
            {tarea ? 'Tarea finalizada!' : 'Tarea pendiente.'}
        </span>
    </div>
}