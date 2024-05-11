import React, {useState, useEffect} from "react";

const Fruta = (props) => {
    const fruta = props.fruta;
    const [cantidad, setCantidad] = useState(0);
    const [total, setTotal] = useState(0);
    useEffect(()=>{
        let total = cantidad * fruta.price;
        total = Math.round(total * 100) / 100;
        setTotal(total);

    }, [cantidad]);
  return (
    <article>
        <div>
            <img src={fruta.image_link} alt="" />
        </div>
        <div>
            <h2>{fruta.name}</h2>
            <p>Precio: {fruta.price}</p>
            {
                fruta.vendors.map((vendor) => (
                    <a href={vendor.self} key={vendor.id}>{vendor.name}</a>
                ))
            }
        </div>
        <div>
            <p>Cantidad: {cantidad} </p>
            <button onClick={() => setCantidad(cantidad + 1)}>➕</button>
            <button onClick={() => setCantidad(cantidad - 1)}>➖</button>
            <h3>Total: {total}</h3>
        </div>
    </article>
  );
};

export default Fruta;
