import { Col, Container, Row } from "react-bootstrap";
import { Category } from "@components/ecommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { actGetCategories } from "@store/categories/categorySlice";

const Categories = () => {
  const { error, loading, records } = useAppSelector(
    (state) => state.categories
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col xs={3} className="d-flex justify-content-center mb-5 mt-2">
          <Category />
        </Col>
        <Col xs={3} className="d-flex justify-content-center mb-5 mt-2">
          <Category />
        </Col>
        <Col xs={3} className="d-flex justify-content-center mb-5 mt-2">
          <Category />
        </Col>
        <Col xs={3} className="d-flex justify-content-center mb-5 mt-2">
          <Category />
        </Col>
        <Col xs={3} className="d-flex justify-content-center mb-5 mt-2">
          <Category />
        </Col>
        <Col xs={3} className="d-flex justify-content-center mb-5 mt-2">
          <Category />
        </Col>
        <Col xs={3} className="d-flex justify-content-center mb-5 mt-2">
          <Category />
        </Col>
        <Col xs={3} className="d-flex justify-content-center mb-5 mt-2">
          <Category />
        </Col>
        <Col xs={3} className="d-flex justify-content-center mb-5 mt-2">
          <Category />
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
