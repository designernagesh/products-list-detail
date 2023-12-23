import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  const { id, image, price, name } = product;
  return (
    <Link to={`/products/${id}`} className="item" key={id}>
      <img src={`/images/${image}`} alt={name} />
      <h2>{name}</h2>
      <div className="price">Rs. {price}/- </div>
    </Link>
  )
}

export default ProductCard
