import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import styles from "./styles.module.scss";
import { HeaderBasket } from "@components/ecommerce";
const { headerContainer, headerLogo } = styles;

const Header = () => {
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>Our</span>
          <Badge bg="info">eCom</Badge>
        </h1>

        <HeaderBasket />
      </div>

      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="categories">Categories</Nav.Link>
              <Nav.Link href="products">Products</Nav.Link>
              <Nav.Link href="about-us">About Us</Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link href="login">Login</Nav.Link>
              <Nav.Link href="register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
