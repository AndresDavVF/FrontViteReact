import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const URL =  `http://localhost:5000/api/productos/`;

const CompMostrarProductos=()=>{

    const [productos, setProductos]= useState([])
    useEffect(()=>{
        getProductos()
    },[]);

    // funcion para mostrar los clientes
    const getProductos = async()=>{
        try {
            const resul = await axios.get(URL);
            setProductos(resul.data);
        } catch (error) {
            console.error('Error al obtener productos:', error);
            // Manejar el error de obtención de clientes aquí, por ejemplo, mostrar un mensaje de error al usuario.
        }
    }

    //funcion Eliminar Clientes
    const eliminarProductos=async(id)=>{
        try{
        await axios.delete(`${URL}${id}`)
        getProductos();
    } catch (error) {
        console.error('Error al obtener productos:', error);
        // Manejar el error de obtención de clientes aquí, por ejemplo, mostrar un mensaje de error al usuario.
    }
    }


    return(
        
        <div className="container">
            <h1>PRODUCTOS</h1>
            <br/>
            <div className="row">
                
                <div className="col">
                    <Link to='/productos/agregar' className="btn btn-primary mt-2 mb-2"><i className="fa-solid fa-plus"></i></Link>
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th>Referencia</th>
                                <th>Garantia</th>
                                <th>Precio</th>
                                <th>Proveedor</th>  
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((producto,index)=>(
                                <tr key = {index}>
                                    <td>{producto.referencia}</td>
                                    <td>{producto.garantia}</td>
                                    <td>{producto.precio}</td>
                                    <td>{producto.proveedor}</td>
                                    <td>
                                    <Link to={`/productos/editar/${producto._id}`} className="btn btn-warning mt-2 mb-2"><i className="fa-solid fa-pen-to-square"></i></Link>
                                    <button onClick={()=> eliminarProductos(producto._id)}  className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompMostrarProductos;