import { Link } from "react-router-dom";

export default function Product(props) {
  return (
    <Link to={`/products/${props.id}`} className="product-link">
      <div className="product-component">
        <img
          src={`${props.src}.png`}
          alt="Soap Image"
          className="product-img"
        />
        <div className="content">
          <h1 className="name">{props.name}</h1>
          <h2 className="type">{props.type}</h2>
          <p className="description standard-content">{props.description}..</p>
          <p className="price">MRP ₹{props.price}</p>
          <Link to={`/products/${props.id}`} className="order">
            View Product
          </Link>
        </div>
      </div>
    </Link>
  );
}
