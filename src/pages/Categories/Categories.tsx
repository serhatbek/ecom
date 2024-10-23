import { Container } from "react-bootstrap";
import { Category } from "@components/ecommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { actGetCategories } from "@store/categories/categorySlice";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";
import { TCategory } from "@customTypes/category";

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

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList<TCategory>
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
