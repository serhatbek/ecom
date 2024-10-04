import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";
import { Header } from "../../comnponents/common";

const { container, wrapper } = styles;

const MainLayout = () => {
  return (
    <Container className={container}>
      <div className={wrapper}>
        <Header />
      </div>
    </Container>
  );
};

export default MainLayout;
