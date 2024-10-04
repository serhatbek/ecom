import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";
import { Footer, Header } from "../../comnponents/common";

const { container, wrapper } = styles;

const MainLayout = () => {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}></div>
      <Footer />
    </Container>
  );
};

export default MainLayout;
