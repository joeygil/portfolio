import "../App.css";

const BoxNav = () => {
  return (
    <div className="first-nav">
      <div className="box-left">
        <img src={require("../images/react.png")} alt="react logo"></img>
      </div>
      <div className="box-center">
        <img
          src={require("../images/javascript.png")}
          alt="javascript logo"
        ></img>
      </div>
      <div className="box-right">
        <img src={require("../images/css.png")} alt="css logo"></img>
      </div>
      <div className="box-far-right">
        <img
          src={require("../images/typescript-logo.png")}
          alt="typescript logo"
        ></img>
      </div>
    </div>
  );
};

export default BoxNav;
