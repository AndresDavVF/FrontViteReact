import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const URL =  `http://localhost:5000/api/Productos/`;

const CompEditarProductos =()=>{

    const [ referencia, setReferencia] = useState('');
    const [ garantia, setGarantia] = useState('');
    const [ precio, setPrecio] = useState('');
    const [ proveedor, setProveedor] = useState('');
    const navigate =useNavigate();
    const {id}=useParams();

    const editarProductos = async (e) =>{
        e.preventDefault();
        await axios.put(`${URL}${id}`,{
            referencia:referencia, garantia:garantia, precio:precio, proveedor:proveedor
        })
        navigate('/productos');
    }
    useEffect(()=>{
        getproductosID()
    },[]);

    const getproductosID = async () =>{
        const resul = await axios.get(`${URL}${id}`, )
        setReferencia(resul.data.referencia)
        setGarantia(resul.data.garantia)
        setPrecio(resul.data.precio)
        setProveedor(resul.data.proveedor)

    }
    return(
        <div>
            <h3>Formulario de Editar Producto</h3>
            <br />
            <br />
            <form onSubmit={editarProductos}>
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
export default CompEditarProductos;