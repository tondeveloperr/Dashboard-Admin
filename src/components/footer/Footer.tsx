import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      {/* <hr /> */}
      <p>
        &copy;2023{" "}
        <a
          href="https://kartono-portfolio.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="label"
        >
          TonDeveloper
        </a>
        . Made with ❤️ and React.js.
      </p>
    </div>
  );
};

export default Footer;
