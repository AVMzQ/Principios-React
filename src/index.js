import React from "react";
import ReactDOM from 'react-dom/client';
import {Saludar, Temas, Temas2, Usuario} from './componentes/Dialogos.js'
import Productos from './componentes/productos.js'
import {Button} from './componentes/Buttons.js'
import {TaskCard} from './componentes/Task.js'

let titutlo = "Que es React?";
let descripcion = "React es una biblioteca de código abierto para crear interfaces de usuario. Es una de las bibliotecas JavaScript más populares entre los desarrolladores Front End, programadores y testers de software."

let usuarios =[{
    id: 1,
    nom: "Angel",
    nomUsuario: "zQ",
    Edad: 24,   
},
{
    id: 2,
    nom: "Angel",
    nomUsuario: "zQ_2",
    Edad: 24,   
},]
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Saludar/>
        <Productos/>
        <Temas titulo = {titutlo} descripcion = {descripcion} />
        <Temas2 titulo={titutlo} descripcion= {descripcion} />
        <Usuario us = {usuarios} />
        <Button texto = {'click'}/>
        <TaskCard tarea = {true}/>
    </>
)