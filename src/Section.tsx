interface Props{
    onDelete: (nombre: String ) => void,
    list: string[]
}

const Section = ({ onDelete, list}: Props) => {
    

  eleminarElemento : (index: number) =>{
    console.log(index)
    const nuevaLista = [...list];
    nuevaLista.splice(index, 1);
    list = nuevaLista;
    console.log('nueva lista  = '+ list)
  }
  const numRows = list.length

  interface idSeleccionado{
    //onDelete
  }

  return (
    <>
      <tbody className="cuerpo-tabla">
            {list.map((nombre, index) =>(
                <tr >
                    <td className="table-check"><input type='checkbox'></input></td>
                    <td>{nombre}</td>
                    <td className="type-number">
                        <button className='color-red' 
                        onClick={() => onDelete(nombre)}>Delete</button></td>
                </tr>)) 
            }
        </tbody>
    </>
  )
}

export default Section