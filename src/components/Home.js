import React, { useEffect, useState, useCallback } from "react";
import Product from './Product';
import './Home.css';
import axios from "./Axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const fetchdata = useCallback(async () => {
    try {
      const response = await axios.get("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products");
      setProducts(response.data);
      setFilteredProducts(response.data);

      const uniqueCategories = ["All", ...new Set(response.data.map(product => product.category))];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchdata();
  }, [fetchdata]); // Only runs once on mount due to `fetchdata` dependency

  const filterProducts = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  return (
    <div className='home'>
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/915O61IvnUL._SX3000_.jpg"
          alt="Home Banner"
        />
        <div className="category__buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`category__button ${selectedCategory === category ? "active" : ""}`}
              onClick={() => filterProducts(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="home__card">
          <div className="home__row">
            {filteredProducts.map(product => (
              <Product
                key={product.id}
                id={product.id}
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
  );
}

export default Home;
