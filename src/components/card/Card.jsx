import React, { useEffect, useState } from "react";
import "./Card.css";
import { GetProducts } from "../../productApi/data";

const Card = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const featchProductGetData = async () => {
      const res = await GetProducts();
      setProducts(res);
    };
    featchProductGetData();
  }, []);

  const handleFavoriteToggle = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
  };

  console.log("r",products)

  return (
    <>
      <div className="cards-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <div className="card-image">
              <img style={{ height: 400 }} src={product.image} alt={product.category} />
            </div>
            <div className="card-content">
              <div>
                <h3 className="card-title">{product.category}</h3>
                <p className="card-description">{product.description}</p>
                <button
                  className="card-favorite"
                  onClick={() => handleFavoriteToggle(product.id)}
                >
                  {product.isFavorite ? (
                    <img style={{ width: 30 }} src="/web/card/heart.png" alt="favorite" />
                  ) : (
                    <img style={{ width: 30 }} src="/web/card/heart (1).png" alt="not favorite" />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;

