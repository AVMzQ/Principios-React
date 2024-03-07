import React from "react";
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(saludar())

function saludar(){
    return <h1>Hola mundo! esto es un componente.</h1>
}