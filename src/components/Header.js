import "../App.css";

const Header = () => {
  setTimeout(() => {
    document.querySelector(".chevron").style.width = "50px";
    document.querySelector(".scroll").style.fontSize = "14px";
  }, 2000);

  // window.addEventListener(
  //   "scroll",
  //   () => {
  //     document.body.style.setProperty(
  //       "--scroll",
  //       window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
  //     );
  //   },
  //   false
  // );

  const scrollToAbout = () => {
    document.querySelector("#web-dev").scrollIntoView({
      behavior: "smooth",
    });
  };

  const backgroundImageFade = () => {
    document.querySelector(".background-img").style.opacity = 1;
  };

  return (
    <>
      <header>
        <img
          src={require("../images/mountains-bg.jpg")}
          className="background-img background"
          alt="mountains"
          onLoad={() => backgroundImageFade()}
        ></img>
        <h1 className="title">
          <span className="tags-in">&#x3c;h1&#x3e;</span>
          <div className="title-container">
            <span>&#123;</span>
            <span className="animate">j</span>
            <span className="animate">o</span>
            <span className="animate">e</span>
            <span className="animate">y</span>
            <span> </span>
            <span className="animate">G</span>
            <span className="animate">i</span>
            <span className="animate">l</span>
            <span className="animate">c</span>
            <span className="animate">h</span>
            <span className="animate">r</span>
            <span className="animate">i</span>
            <span className="animate">s</span>
            <span className="animate">t</span>
            <span>&#125;</span>
          </div>

          <span className="tags-in-bottom">&#x3c;/h1&#x3e;</span>
        </h1>
      </header>
      <div className="chevron-container">
        <img
          className="chevron"
          onClick={scrollToAbout}
          src={require("../images/down.png")}
          alt="navigation chevron"
        />

        <p className="scroll">SCROLL</p>
      </div>
    </>
  );
};

export default Header;
