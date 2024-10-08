import styles from "./styles.module.scss";
const { footerContainer } = styles;

const Footer = () => {
  return (
    <footer>
      <div className={footerContainer}>
        @ 2024 Our eCom. All right reserved.
      </div>
    </footer>
  );
};

export default Footer;
