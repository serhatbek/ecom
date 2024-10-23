import { Col, Row } from "react-bootstrap";

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => JSX.Element;
};

const GridList = <T extends { id?: number }>({
  records,
  renderItem,
}: GridListProps<T>) => {
  const recordList =
    records.length > 0
      ? records.map((record) => (
          <Col
            xs={3}
            key={record.id}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            {renderItem(record)}
          </Col>
        ))
      : "There are no items";

  return <Row>{recordList}</Row>;
};

export default GridList;
