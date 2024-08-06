import React, { useEffect, useState } from "react";
import "./Card.css";
import { GetProducts } from "../../productApi/data";

const Card = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const featchProductGetData = async () => {
      const res = await GetProducts();
      setProducts(res);
      console.log("raju", products);
    };
    featchProductGetData();
  }, []);
  return (
    <>
      <div className="cards-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <div className="card-image">
              <img src={product.image} />
            </div>
            <div className="card-content">
              <div>
                <h3 className="card-title">{product.category}</h3>
                <p className="card-description">{product.description}</p>
                <button className="card-favorite">&#9825;</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
