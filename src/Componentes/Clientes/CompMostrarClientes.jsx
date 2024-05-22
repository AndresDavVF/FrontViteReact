import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const URL =  `http://localhost:5000/api/Clientes/`;

const CompMostrarClientes=()=>{

    const [clientes, setClientes]= useState([])
    useEffect(()=>{
        getCLientes()
    },[]);

    // funcion para mostrar los clientes
    const getCLientes = async()=>{
        try {
            const resul = await axios.get(URL);
            setClientes(resul.data);
        } catch (error) {
            console.error('Error al obtener clientes:', error);
            // Manejar el error de obtención de clientes aquí, por ejemplo, mostrar un mensaje de error al usuario.
        }
    }

    //funcion Eliminar Clientes
    const eliminarCLientes=async(id)=>{
        try{
        await axios.delete(`${URL}${id}`)
        getCLientes();
    } catch (error) {
        console.error('Error al obtener clientes:', error);
        // Manejar el error de obtención de clientes aquí, por ejemplo, mostrar un mensaje de error al usuario.
    }
    }


    return(
        <div className="container">
                        <h1>CLIENTES</h1>
            <br/>
            <div className="row">
                <div className="col">
                    <Link to='/clientes/agregar' className="btn btn-primary mt-2 mb-2"><i className="fa-solid fa-plus"></i></Link>
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th>Nombre Cliente</th>
                                <th>Apellidos Cliente</th>
                                <th>Cedula Cliente</th>
                                <th>Correo Cliente</th>
                                <th>Telefono Cliente</th>
                                <th>Direccion Cliente</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((cliente,index)=>(
                                <tr key = {index}>
                                    <td>{cliente.nombres}</td>
                                    <td>{cliente.apellidos}</td>
                                    <td>{cliente.cedula}</td>
                                    <td>{cliente.correo}</td>
                                    <td>{cliente.telefono}</td>
                                    <td>{cliente.direccion}</td>
                                    <td>
                                    <Link to={`/clientes/editar/${cliente._id}`} className="btn btn-warning mt-2 mb-2"><i className="fa-solid fa-pen-to-square"></i></Link>
                                    <button onClick={()=> eliminarCLientes(cliente._id)}  className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
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

export default CompMostrarClientes;