export function Saludar(){
    return <h1>Hola mundo! esto es un componente.</h1>
}
export function Temas(Contenido){
    return <div>
        <h3>{Contenido.titulo}</h3>
        <p>{Contenido.descripcion}</p>
    </div>
}
export function Temas2({titulo, descripcion}){
    return <div>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
    </div>
}
export function Usuario({us}){
    const listaUsuarios = us.map(usuarios =>
            <li key={usuarios.id}>
                <>
                    Nombre {usuarios.nom},
                    Usuario: {usuarios.nomUsuario},
                    Edad: {usuarios.Edad}
                </>
            </li>
        )
    return <>
        <h1>Lista de usuarios</h1>
        <ul>{listaUsuarios}</ul>
        <h2>Fin de la lista</h2>
    </>
}
