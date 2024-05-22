import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const URL =  `http://localhost:5000/api/proveedores/`;

const CompMostrarProveedores=()=>{

    const [proveedores, setProveedores]= useState([])
    useEffect(()=>{
        getProveedores()
    },[]);

    // funcion para mostrar los Proovedores
    const getProveedores = async()=>{
        try {
            const resul = await axios.get(URL);
            setProveedores(resul.data);
        } catch (error) {
            console.error('Error al obtener Proveedores:', error);
            // Manejar el error de obtención de Proveedores aquí, por ejemplo, mostrar un mensaje de error al usuario.
        }
    }

    //funcion Eliminar Proovedores
    const eliminarProveedores=async(id)=>{
        try{
        await axios.delete(`${URL}${id}`)
        getProveedores();
    } catch (error) {
        console.error('Error al obtener Proveedores:', error);
        // Manejar el error de obtención de Proveedores aquí, por ejemplo, mostrar un mensaje de error al usuario.
    }
    }


    return(
        <div className="container">
                        <h1>PROVEEDORES</h1>
            <br/>
            <div className="row">
                <div className="col">
                    <Link to='/proveedores/agregar' className="btn btn-primary mt-2 mb-2"><i className="fa-solid fa-plus"></i></Link>
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th>Nombre Proveedor</th>
                                <th>Nit Proveedor</th>
                                <th>Correo Proveedor</th>
                                <th>Telefono Proveedor</th>
                                <th>Direccion Proveedor</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {proveedores.map((proveedor,index)=>(
                                <tr key = {index}>
                                    <td>{proveedor.nombre}</td>
                                    <td>{proveedor.nit}</td>
                                    <td>{proveedor.correo}</td>
                                    <td>{proveedor.telefono}</td>
                                    <td>{proveedor.direccion}</td>
                                    <td>
                                    <Link to={`/proveedores/editar/${proveedor._id}`} className="btn btn-warning mt-2 mb-2"><i className="fa-solid fa-pen-to-square"></i></Link>
                                    <button onClick={()=> eliminarProveedores(proveedor._id)}  className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
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

export default CompMostrarProveedores;