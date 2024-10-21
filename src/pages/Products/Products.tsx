// import styles from "./styles.module.scss";
import { Product } from "@components/ecommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Loading } from "@components/feedback";

const Products = () => {
  const { error, loading, records } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  const productList =
    records.length > 0
      ? records.map((record) => (
          <Col
            xs={3}
            key={record.id}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Product {...record} />
          </Col>
        ))
      : "";
  return (
    <Container>
      <Loading status={loading} error={error}>
        <Row>{productList}</Row>
      </Loading>
    </Container>
  );
};

export default Products;
