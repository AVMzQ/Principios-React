import PropTyps from 'prop-types'
Button.prototype = {
    texto: PropTyps.string.isRequired
}
Button.prototype = {
    texto: ""
}
export function Button({texto}){
    return <button>
        {texto}
    </button>
}
