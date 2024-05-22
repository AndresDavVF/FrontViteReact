import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const URL =  `http://localhost:5000/api/Productos/`;

const CompCrearProductos =()=>{

    const [ referencia, setReferencia] = useState('');
    const [ garantia, setGarantia] = useState('');
    const [ precio, setPrecio] = useState('');
    const [ proveedor, setProveedor] = useState('');
    const navigate =useNavigate();


    const guardarProductos = async (e) =>{
        e.preventDefault();
        await axios.post(URL,{
            referencia:referencia, garantia:garantia, precio:precio, proveedor:proveedor
        })
        navigate('/productos')
     }

    return(
        <div>
            <h3>Formulario de Guardar Producto</h3>
            <br />
            <br />
            <form onSubmit={guardarProductos}>
                <div className="mb-3">
                    <label className="from-label">Referencia Producto</label>
                    <input value ={referencia} onChange ={(e) => setReferencia(e.target.value)} type="text" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="from-label">Garantia Producto</label>
                    <input value ={garantia} onChange ={(e) => setGarantia(e.target.value)} type="text" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="from-label">Precio Producto</label>
                    <input value ={precio} onChange ={(e) => setPrecio(e.target.value)} type="number" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="from-label">Proveedor</label>
                    <input value ={proveedor} onChange ={(e) => setProveedor(e.target.value)} type="text" className="form-control"/>
                </div>


                <button className="btn btn-primary" type="submit"><i className="fa-solid fa-floppy-disk"></i></button>
            </form>
        </div>
    )
}
export default CompCrearProductos;