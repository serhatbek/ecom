import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";
import { Link, useRouteError, Navigate } from "react-router-dom";

const { notFound } = styles;

const ErrorPage = () => {
  let error = useRouteError();

  console.log(useRouteError());

  return (
    <Container className={notFound}>
      <h1>{error.status}</h1>
      <p>{error.statusText}</p>
      <p>{error.message || error.data}</p>
      <Link to="/" replace={true}>
        Looks like you've reached to a non-existent page <br />
        How about going back to safety?
      </Link>
    </Container>
  );
};

export default ErrorPage;
