import "../App.css";

const Header = () => {
  setTimeout(() => {
    document.querySelector(".chevron").style.width = "100px";
    document.querySelector(".scroll").style.fontSize = "18px";
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

  // const backgroundImageFade = (e) => {
  //   document.querySelector(".background-img").style.opacity = 1;
  // };

  return (
    <>
      <header>
        <img
          src={require("../images/mountains-bg.jpg")}
          className="background-img background"
          alt="mountains"
          // onLoad={(e) => backgroundImageFade()}
        ></img>
        <h1 className="title">
          <span className="tags-in"> &#x3c;h1&#x3e; </span>
          <span>Joey Gilchrist.</span>
          <span className="tags-in"> &#x3c;/h1&#x3e; </span>
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
