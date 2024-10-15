import { TProduct } from "@customTypes/product";
import styles from "./styles.module.scss";
import { Button } from "react-bootstrap";

const { product, productImg } = styles;

const Product = ({ title, img, price }: TProduct) => {
  return (
    <div className={product}>
      <figure className={productImg}>
        <img src={img} alt={title} />
      </figure>

      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
