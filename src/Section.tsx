interface Props{
    list : string[]
}

const Section = ({list}: Props) => {
    

  const eleminarElemento = (index: number) =>{
    console.log(index)
    const nuevaLista = [...list];
    nuevaLista.splice(index, 1);
    list = nuevaLista;
    console.log('nueva lista  = '+ list)
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
                        onClick={() => eleminarElemento(index)}>Delete</button></td>
                </tr>)) 
            }
        </tbody>
    </>
  )
}

export default Section