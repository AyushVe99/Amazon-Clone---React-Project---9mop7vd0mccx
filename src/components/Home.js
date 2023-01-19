import React, { useEffect, useState } from "react";
import Product from './Product'
import './Home.css'
import axios from "./Axios";

function Home() {
  const [products, setProducts] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products");
      setProducts(data);
    };
    fetchdata();
  }, []);
  return (
    <div className='home'>
        <div className="home__container">
       <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/915O61IvnUL._SX3000_.jpg"
          alt=""
        />
        <div className="home__card">
        <div className="home__row">
        {products &&
          products?.data.map((product) => (
            <Product
              id={product._id}
              image={product.image}
              price={product.price}
              rating={product.rating}
              title={product.title}
            />
            ))}
        </div>
        </div>

        
        </div>
    </div>
  )
}

export default Home