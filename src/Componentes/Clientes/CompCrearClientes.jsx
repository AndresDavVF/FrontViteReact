import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const URL =  `http://localhost:5000/api/Clientes/`;

const compCrearClientes =()=>{

    const [ nombres, setNombre] = useState('');
    const [ apellidos, setApellido] = useState('');
    const [ cedula, setCedula] = useState('');
    const [ correo, setCorreo] = useState('');
    const [ telefono, setTelefono] = useState('');
    const [ direccion, setDireccion] = useState('');
    const navigate =useNavigate();


    const guardarClientes = async (e) =>{
        e.preventDefault();
        await axios.post(URL,{
            nombres:nombres, apellidos:apellidos, cedula:cedula, correo:correo, telefono:telefono,direccion:direccion
        })
        navigate('/clientes')
     }

    return(
        <div>
            <h3>Formulario de Guardar Cliente</h3>
            <br />
            <br />
            <form onSubmit={guardarClientes}>
                <div className="mb-3">
                    <label className="from-label">Nombre Clientes</label>
                    <input value ={nombres} onChange ={(e) => setNombre(e.target.value)} type="text" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="from-label">Apellidos Clientes</label>
                    <input value ={apellidos} onChange ={(e) => setApellido(e.target.value)} type="text" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="from-label">Cedula Clientes</label>
                    <input value ={cedula} onChange ={(e) => setCedula(e.target.value)} type="number" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="from-label">Correo Clientes</label>
                    <input value ={correo} onChange ={(e) => setCorreo(e.target.value)} type="text" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="from-label">Telefono Clientes</label>
                    <input value ={telefono} onChange ={(e) => setTelefono(e.target.value)} type="number" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="from-label">Direccion Clientes</label>
                    <input value ={direccion} onChange ={(e) => setDireccion(e.target.value)} type="text" className="form-control"/>
                </div>

                <button className="btn btn-primary" type="submit"><i className="fa-solid fa-floppy-disk"></i></button>
            </form>
        </div>
    )
}
export default compCrearClientes;