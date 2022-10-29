import "../App.css";

const Certifications = () => {
  return (
    <>
      <div className="container">
        <div className="certi-container">
          <h2 className="certi-title">
            {" "}
            <span className="tags-in"> &#x3c;h2&#x3e; </span>🏆certifications.
            <span className="tags-in"> &#x3c;/h2&#x3e; </span>
          </h2>
          <div className="javascript-cert">
            <img
              className="javascript-cert-img"
              src={require("../images/javascript-certificate.jpg")}
              alt="javascript certificate"
            />
          </div>
          <div className="css-cert">
            {" "}
            <img
              className="css-cert-img"
              src={require("../images/css-certificate.jpg")}
              alt="css certificate"
            />
          </div>
          <div className="csharp-cert">
            {" "}
            <img
              className="html-cert-img"
              src={require("../images/html-certificate.jpg")}
              alt="html certificate"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Certifications;
