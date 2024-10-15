import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const { category, categoryImg, categoryTitle } = styles;

interface IProps {
  id: number;
  title: string;
  prefix: string;
  img: string;
}

const Category = ({ title, prefix, img }: IProps) => {
  return (
    <div className={category}>
      <Link to={`categories/products/${prefix}`}>
        <figure className={categoryImg}>
          <img src={img} alt={title} />
        </figure>
        <h4 className={categoryTitle}>{title}</h4>
      </Link>
    </div>
  );
};

export default Category;
