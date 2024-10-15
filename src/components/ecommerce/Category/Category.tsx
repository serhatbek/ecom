import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { TCategory } from "@customTypes/category";

const { category, categoryImg, categoryTitle } = styles;

const Category = ({ title, prefix, img }: TCategory) => {
  return (
    <div className={category}>
      <Link to={`products/${prefix}`}>
        <figure className={categoryImg}>
          <img src={img} alt={title} />
        </figure>
        <h4 className={categoryTitle}>{title}</h4>
      </Link>
    </div>
  );
};

export default Category;
