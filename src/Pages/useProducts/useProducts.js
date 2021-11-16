import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://mighty-fjord-00429.herokuapp.com/products").then((res) =>
      res.json().then((data) => {
        console.log(data);
        setProducts(data);
      })
    );
  }, []);

  return products;
};

export default useProducts;
