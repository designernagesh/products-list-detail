import { Link, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { IoCartOutline } from "react-icons/io5";

function ProductDetails({ productsList }) {
  let { id } = useParams();

  const singleProduct = productsList.find(
    (product) => product.id === parseInt(id)
  );

  const similarProducts = productsList.filter(
    product => product.id !== parseInt(id) && singleProduct.category === product.category
  );

  const { price, image, name, category, description } = singleProduct;
  return (
    <>
      <div className="container">
        <div className="detail">
          <div className="image">
            <img src={`/images/${image}`} alt={name} />
          </div>
          <div className="content">
            <div className="title">PRODUCT'S DETAIL</div>
            <h1 className="name">{name}</h1>
            <div className="category">Category: <strong>{category}</strong></div>
            <div className="price">Rs. {price}/-</div>
            <div className="buttons">
              <button>Check Out</button>
              <button>
                Add To Cart
                <span>
                  <IoCartOutline />
                </span>
              </button>
            </div>
            <div className="description">
              <strong>Description:</strong>
              <br />
              {description}
            </div>
          </div>
        </div>

        <div className="similar-products">
          <div className="title">Similar products</div>
          <div className="listProduct">
            {similarProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="button-wrapper">
            <Link to="/">
              <button>Go to all Products</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
