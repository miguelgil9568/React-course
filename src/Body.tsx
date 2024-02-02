import { useEffect, useState } from 'react'
import Section from './Section'
import './Body.css'


    
interface Props{
    title: string
}  

export interface Welcome {
    userId:    number;
    id:        number;
    title:     string;
    completed: boolean;
}

const Body = ({title}: Props) => {

    useEffect(() =>{
        console.log('Se monto el componente');
        return () => {fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .catch(error => console.log('hubo un error ' + error))
          .then(json => {
            console.log('data ' + JSON.stringify(json));
            setList(json);
          });
        }
          
        // return () => {}
          // console.log('Se desmonto el componente')
      })
    
    const [list, setList] = useState<Welcome[]>([]);
    const [nuevoElemento, setNuevoElemento] = useState<string>("");

    const agregarElemento = () => {
        if (nuevoElemento.trim() !== "") {
            var nuevo: Welcome = {
                id: 1,
                title: nuevoElemento,
                userId: 1,
                completed: true
            }

            setList((prevElementos) => [...prevElementos , nuevo]);
            setNuevoElemento("");
        }
        };
    
    const onDelete = (nombre: String) =>{
        console.log('id a borrar = ' + nombre);
        setList([...list.filter(nombreAux => nombreAux.title != nombre)])
    }

    return (
        <>
        <div className='div_border'>
            <h1> {title} </h1>
            <form  id='form-input'>
                <input type='text' id='Name' className='input' value={nuevoElemento} 
                onChange={(value) => setNuevoElemento(value.target.value)} required/> 
                <button type='submit' className='color-blue' 
                onClick={agregarElemento} >Save</button>
            </form>
            <table >
                <thead className="encabezado-tabla">
                <tr>
                    <th>Ítem</th>
                    <th>Seleccionar</th>
                    <th>Nombre</th>
                    <th>Operaciones</th>
                </tr>
                </thead>
                <Section list={list} onDelete={onDelete} />                
            </table>
        </div>
     
        <p className="read-the-docs">
            Primer entregable, Miguel Angel Gil Albarracin
        </p>
        </>
    )
}

export default Body