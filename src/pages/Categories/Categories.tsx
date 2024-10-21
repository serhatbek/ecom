import { Col, Container, Row } from "react-bootstrap";
import { Category } from "@components/ecommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { actGetCategories } from "@store/categories/categorySlice";
import { Loading } from "@components/feedback";

const Categories = () => {
  const { error, loading, records } = useAppSelector(
    (state) => state.categories
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch]);

  const categoryList =
    records.length > 0
      ? records.map((record) => (
          <Col
            xs={3}
            key={record.id}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Category {...record} />
          </Col>
        ))
      : "there are no categories";

  return (
    <Container>
      <Loading status={loading} error={error}>
        <Row>{categoryList}</Row>
      </Loading>
    </Container>
  );
};

export default Categories;
