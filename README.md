REACT

--- PRINCIPIOS -------------------
El body de react esta centrado en public> index.html

    <div id="root"></div>
En la carpta src> se encuentra css y js
package.json> Se encuentran todas las bibliotecas que va a utilizar
la aplicacion.


Lo que se sube a produccion es la carpeta build mediante el codigo
npm start build.
Esta carpeta tiene optimizado todo lo programado, listo para 
mandar a produccion.


--- Lo primero ---------------


En src/index.js se centra el codigo que se mostrara en el div con el id='root'
En el archivo index.js se deben de importar dos cosas

	react importa las librerias de react
	react-dom/client importa las librerias de react especializadas para hacer
		alicaciones web.
Se recomienda que el nombre que utilizes para importar las librerias sea el mismo
que el nombre de la libreria utilizando UpperCamelCase como nomenclatura.

Para mostrar el contenido en el div se debe de renderizar el codigo html mediante
una variable de tipo const. Se selecciona este tipo de variables porque no se espera
que cambie el valor o la ruta de este, de igaul forma se hace para que el desarrollador
no pueda manular la ruta del div con id root.
Se declara de la siguiente forma.

	const root = ReactDOM.createRoot(document.getElementById('root'))
	root.render(<h1>Hola mundo!</h1>)
Con estas instrucciones realizaste tu primera appWeb con react.


--- JSX ----------


En react no se utiliza tal cual JavaScript sino que utiliza html y JavaScript para 
que posteriormente el motor lo conviera a JavaScript puro.
El codigo que se interpeta con JavaScript se muestra con {}, esto lo hace JSX para no
confundir el texto con variables de JS.


-----------------


Componente de react
Todos los componentes se mantienen dentro del componente root y capa aplicacion
react inicia con el componente root.
Siempre debe de haber un componente que contenga al resto.


--- Como crear componentes ----
Normalmente al crear un componente este simpre debe de empezar
con una letra mayuscula.
Un componente en react son funciones que siempre devuelven una porcion de interfaz
en otras palabras retorna html. Este tipo de funciones tiene la finalidad de ser
reutilizables.

    function saludar(){
    	<div>
    		<h1> Hola mundo, soy un componente! </h1>
    	</div>
    }
    root.render(<div> saludar() </div>)
self closing tags
Existe otra forma de mostrar los componentes de una funcion y esta es llamada self closing
tags, estas etiquetas son del lenguaje jsx y son utilizadas para ser mas comprencibles.

    root.render(
    	<div>	<saludar></saludar>
    		</saludar>
    	</div>
    <saludar/>
React tiene una mejor forma de optimizar el codigo para que no existan tantos div en
nuestra appWeb y esa es <></> esta etiqueta le dice a react que existen mas componentes
dentro del div, esto hace que react no cree otro div y utilize el contenedor actual como
div.
Esto tambien se puede aplicar en las funciones de componentes.

    function saludar(){
    	<> <h1> Hola mundo, soy un componente! </h1> </>
    }
    root.render(<div> saludar() </div>)
	
    root.render(
    	<>	
    		<saludar></saludar>
    		</saludar>
    	</>
    <saludar/>

--- EcmaScript

Dividir multiples componentes en multiples archivos
para utilizar una funcion en index se debe de crear el 
componente con la palabra export. de esta manera se puede importar en el index
		-> Export
		export funcion Saludo(){
			return <h1>Hola!</h1>;
		}

		-> Import
		import {Saludar} from './saludar'
Existe otra forma de exportar un componente pero este metodo solo exporta un el 
componente seleccionado al final del archivo, es decir, al momento de importar el archivo 
react solo exportara el componente seleccionado.
		-> Export
		export default TuComponente;

		-> Import
		import TuComponente from './TuRuta

--- Extencion jsx ----------

La extencion jsx se asegura que el desarrollador sepa que en ese archivo se estan manejando componentes.
La utilizacion de este exponente no cambia nada, esta extencion es meramente opcional.

--- React Props ---------------

Los Props en react son los parametros en un componente.
Los Props son utilizados para variar el resultado deseado de un componente.

		export function Componente(info){
			return {
				<div>
					<h1>{info.titulo}</h1>
					<br>
					<h2> {info.descripcion} </h2>
				</div>
			}
		}

		export function Temas2({titulo, descripcion}){
			return <div>
				<h3>{titulo}</h3>
				<p>{descripcion}</p>
			</div> 
		}

Paso de Prop 
        <Temas titulo = {titutlo} descripcion = {descripcion} />
        <Temas2 titulo={titutlo} descripcion={descripcion} />

Si el Prop de la funcion no esta en {} le dice a react que solo esta recibiendo un objeto. 
Un prop tambien puede recibir una funcion.

--- Default props
Para especificarle al desarrollador que tipo de dato vamos a manejar en un componente debemos
 de importar un paquete, esta se llama npm propsTyps
Como se importa?

		import PropTyps from 'prop-typs'
Como se utiliza?

		TuComponente.proptype{
			text: PropTyps.string.isRequired;
		}
como se agregar valores por defecto?
		Button.prototype{
			texto = "";
		}
El valor por defecto tambien se puede poner en el prop del componente 

		funcion TuComponente ({text = ''}){}
Los erres que se producen por el tipo se reflejan por la consola.

		function Button(){
			return <button>
				Mi Botton
			</button>
		}

--- Estilos de componentes
Existen varias formas de agregarle estilos a un componente estos pueden ser directo en la etiqueta,
 creando una variable, por medio de un archivo css o algun framework de estilos.
Drecto en el componente>

		<div style=({backgroud: "#202020", color: '#fff', padding: '20px'})></div>
por una variable>

		const estilo = {backgroud: "#202020", color: '#fff', padding: '20px'}
		<div style = ({estilo})></div>
por archivo css>
Se debe de crear un achivo css y por ese medio se puede escribir codigo css
para importar los estilos en css se hace directamente en el archivo en donde este ubicado el
componente.

		.card{
			backgroud: "#202020";
			color: '#fff';
			padding: '20px';
		}
componente 

		import './estilo-task.css'
		<div className = 'card'></div>

Es posible agregar condiciones dentro de las etiquetas html para mostrar estilos diferentes
dependiendo de un resultado dado.

		class>
		<div className= {res ? 'bg-verde' : 'bg-rojo'}>

		style>
		<div style = {res ? {color:'lightgreen'} : {color: 'white'}}>
--- tipos de componentes
Existen algunas formas de crear componentes estas pueden ser funciones o clases

		function Saludar(){
			return <div><h1>Hola mundo</h1></div>
		}
		class Saludar(){
			render(){
				return <div><h1>Hola mundo</h1></div>
			}
		}

Cada una de estos componentes tiene su forma de manejar las funciones devulven algun componente y las class crean un render en la misma clase.

--- Event Handler

EventHandler es un medio por donde react maneja eventos por ejemplo un evento Onclick en un boton. Estos eventos se manejan por una funcion.

	<button Onclick = {function(){
		console.log('Precionaron el boton')
	}}></button>


