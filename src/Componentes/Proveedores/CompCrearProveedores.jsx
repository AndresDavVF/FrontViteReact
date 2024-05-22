import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const URL =  `http://localhost:5000/api/Proveedores/`;

const CompCrearProveedores =()=>{

    const [ nombre, setNombre] = useState('');
    const [ nit, setNit] = useState('');
    const [ correo, setCorreo] = useState('');
    const [ telefono, setTelefono] = useState('');
    const [ direccion, setDireccion] = useState('');
    const navigate =useNavigate();


    const guardarProveedores = async (e) =>{
        e.preventDefault();
        await axios.post(URL,{
            nombre:nombre, nit:nit, correo:correo, telefono:telefono,direccion:direccion
        })
        navigate('/proveedores')
     }

    return(
        <div>
            <h3>Formulario de Guardar Proveedores</h3>
            <br />
            <br />
            <form onSubmit={guardarProveedores}>
                <div className="mb-3">
                    <label className="from-label">Nombre Proveedor</label>
                    <input value ={nombre} onChange ={(e) => setNombre(e.target.value)} type="text" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="from-label">Nit Proveedor</label>
                    <input value ={nit} onChange ={(e) => setNit(e.target.value)} type="number" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="from-label">Correo Proveedor</label>
                    <input value ={correo} onChange ={(e) => setCorreo(e.target.value)} type="text" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="from-label">Telefono Proveedor</label>
                    <input value ={telefono} onChange ={(e) => setTelefono(e.target.value)} type="number" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="from-label">Direccion Proveedor</label>
                    <input value ={direccion} onChange ={(e) => setDireccion(e.target.value)} type="text" className="form-control"/>
                </div>

                <button className="btn btn-primary" type="submit"><i className="fa-solid fa-floppy-disk"></i></button>
            </form>
        </div>
    )
}
export default CompCrearProveedores;