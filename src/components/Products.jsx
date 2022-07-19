import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>Libros</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Libro</th>
              <th scope="col">Generos</th>
              <th scope="col">Detalle</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 &&
              products.map((p) => {
                return (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.gender}</td>
                    <td>Detalle</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;
