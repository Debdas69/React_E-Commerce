import React, { useState } from 'react'
import bg from '../../assets/bg0.gif'
import './Home.css'
import { Catagory } from '../../Category'
import Product from '../../components/Product/Product'

const Home = () => {

  let [cate, setCate] = useState(Catagory)
  function filteredProducts(category) {
    const updateData = Catagory.filter((item) => (item.category === category))
    setCate(updateData)
  }
  return (
    <div className='home'>
      <div className="hero-bg">
        <img src={bg} alt="" />
      </div>
      <div className="category-section">
        {
          Catagory.slice(0, 5).map((product) => {
            return (
              <div key={product.id} className="category-card" onClick={()=>{
                filteredProducts(product.category)
              }}>
                <img src={product.image} alt="" />
                <span>{product.name}</span>
              </div>
            )
          })
        }
      </div>
      <h1>Trending Products</h1>
      <div className="product-section">
        {
          cate.slice(0, 7).map((product) => (

            <Product name={product.name} price={product.price} image={product.image} />

          ))
        }
      </div>
    </div>
  )
}

export default Home