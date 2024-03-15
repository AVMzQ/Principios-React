import '../style/container.css'

export function Saludar(){
    return <div className='container'>
        <h1 className='Tema'>Primer componente</h1>
        <h2>Hola mundo! esto es un componente.</h2>
    </div>
}
export function Temas(Contenido){
    return <div className="container">
        <h1 className='Tema'>Componente con un prop</h1>
        <h3>{Contenido.titulo}</h3>
        <p>{Contenido.descripcion}</p>
    </div>
}
export function Temas2({titulo, descripcion}){
    return <div className="container">
        <h1 className='Tema'>Componente con dos prop</h1>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
    </div>
}
export function Usuario({us}){
    const listaUsuarios = us.map(usuarios =>
            <li key={usuarios.id} className='lista'>
                <>
                    <p>{usuarios.nom}</p>
                    <p>Usuario: {usuarios.nomUsuario}</p>
                    <p>Edad: {usuarios.Edad}</p>
                </>
            </li>
        )
    return <div className="container">
        <h1 className='Tema'>Lista de usuarios</h1>
        <ul>{listaUsuarios}</ul>
    </div>
}
