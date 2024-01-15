import { useEffect, useState } from 'react'
import Section from './Section'
import './Body.css'


    
interface Props{
    title: string
}  

const Body = ({title}: Props) => {
    
    const [list, setList] = useState<string[]>([]);
    const [nuevoElemento, setNuevoElemento] = useState<string>("");

    const agregarElemento = () => {
        if (nuevoElemento.trim() !== "") {
            setList((prevElementos) => [...prevElementos, nuevoElemento]);
            setNuevoElemento("");
        }
        };
    
    return (
        <>
        <div className='content'>
            <h1> {title} </h1>
            <form  id='form-input'>
            <input type='text' id='Name' value={nuevoElemento} onChange={(value) => setNuevoElemento(value.target.value)} required/> <button type='submit' className='color-blue' 
            onClick={agregarElemento} >Save</button>
            </form>
            <table >
                <thead className="encabezado-tabla">
                <tr>
                    <th>Ítem</th>
                    <th>Nombre</th>
                    <th>Operaciones</th>
                </tr>
                </thead>
                <Section list={list}/>                
            </table>
        </div>
        
        {/* <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
            </button>
            <p>
            Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div> */}
        <p className="read-the-docs">
            Primer entregable, Miguel Angel Gil Albarracin
        </p>
        </>
    )
}

export default Body