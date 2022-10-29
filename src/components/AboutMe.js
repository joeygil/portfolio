import "../App.css";

let aboutMeElement;

window.addEventListener(
  "load",
  (event) => {
    aboutMeElement = document.querySelector(".about-me-container");

    createObserver();
  },
  false
);

const createObserver = () => {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(aboutMeElement);
};

const buildThresholdList = () => {
  let thresholds = [];
  let numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
};

const handleIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    entry.target.style.opacity = entry.intersectionRatio;
  });
};

const AboutMe = () => {
  return (
    <div className="container background">
      <div className="about-me-container">
        <h2 className="about-me-h2">
          <span className="tags-in"> &#x3c;h2&#x3e; </span>🙋🏻‍♂️aboutMe.
          <span className="tags-in"> &#x3c;/h2&#x3e; </span>
        </h2>

        <div className="about-me-box">
          <p className="blurb">
            Efficient Junior Web Developer with excellent communication and
            organisational abilities brings enthusiasm and detailed
            understanding of various programming languages. Resourceful
            approach to solving diverse problems. Deadline-driven and
            knowledgeable professional with strong desire to learn and
            contribute to team success. Successful at improving usability,
            performance and functionality applying skills in HTML, C#
            JavaScript, Typescript CSS and ReactJS. Collaborative and
            hardworking team player with critical thinking skills and systematic
            approach.
            <p className="socials-icons">Socials:</p>
            <a
              className="github-link"
              href="https://github.com/joeygil"
              target="_blank"
            >
              <img
                className="github"
                src={require("../images/github-logo.png")}
                alt="github logo"
              />
            </a>
            <a
              className="github-link"
              href="https://github.com/joeygil"
              target="_blank"
            >
              <img
                className="github-wht"
                src={require("../images/github-logo-wht.png")}
                alt="github logo white"
              />
            </a>
            <a
              className="linkedin-link"
              href="https://www.linkedin.com/in/joey-gilchrist-670985250/"
              target="_blank"
            >
              <img
                className="linked-in"
                src={require("../images/linked-in.png")}
                alt="linkedin logo"
              />
            </a>
          </p>
          <img
            className="me-large-screen"
            src={require("../images/joey.png")}
            alt="my photo"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
