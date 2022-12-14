import "../App.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <p className="schpeel">Socials:</p>
        <a
          className="github-link-footer"
          href="https://github.com/joeygil"
          target="_blank"
          aria-label="view my github"
        >
          <img
            className="github-wht-footer"
            src={require("../images/github-logo-wht.png")}
            alt="github logo white"
          />
        </a>
        <a
          className="linkedin-link-footer"
          href="https://www.linkedin.com/in/joey-gilchrist-670985250/"
          target="_blank"
          aria-label="view my linked-in profile"
        >
          <img
            className="linked-in-footer"
            src={require("../images/linked-in.png")}
            alt="linkedin logo"
          />
        </a>
        <a
          className="linkedin-link-footer"
          href="https://www.twitter.com/joeygilc"
          target="_blank"
          aria-label="view my twitter profile"
        >
          <img
            className="twitter-footer"
            src={require("../images/twitter.png")}
            alt="linkedin logo"
          />
        </a>
      </div>
    </>
  );
};

export default Footer;
