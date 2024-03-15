import PropTyps from 'prop-types'
import '../style/container.css'
Button.prototype = {
    texto: PropTyps.string.isRequired
}
Button.prototype = {
    texto: ""
}
export function Button({texto}){
    return <div className="container">
        <h1 className='Tema'>Un simple boton</h1>
        <button>
            {texto}
        </button>
    </div>
}
function bottonClick(){
    console.log('Se preciono el boton!')
}
export function Button_Click(){
    return <div className="container">
        <h1  className='Tema'>Botton con evento click</h1>
        <button onClick={bottonClick}> Precioname! y checa la consola </button>
    </div> 
}