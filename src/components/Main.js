import "../App.css";

const Main = () => {
  return (
    <>
      <main>
        <span className="tags-in"> &#x3c;h2&#x3e; </span>
        <h2 id="web-dev" className="web-dev">
          💻 frontendDeveloper
        </h2>
        <span className="tags-in"> &#x3c;/h2&#x3e; </span>
      </main>
      <div className="container" id="main">
        <div className="main-container">
          <span className="tags-in-dark">
            {" "}
            &#x3c;div id&#x3d;
            <br />
            &#x22;my-work&#x22;&#x3e;{" "}
          </span>
          <a
            className="todo-link"
            href="https://joeygil.github.io/todoapp/"
            target="_blank"
          >
            <div className="todo">
              {" "}
              <img
                className="todo-schpeel"
                src={require("../images/todo-app-schpeel.png")}
                alt="info on my todo app project"
              />
            </div>
          </a>
          <a
            className="calculator-link"
            href="https://joeygil.github.io/calculator/"
            target="_blank"
          >
            <div className="calculator">
              {" "}
              <img
                className="calculator-schpeel"
                src={require("../images/calculator-schpeel.png")}
                alt="info on my calculator project"
              />
            </div>
          </a>
          <a
            className="reddit-link"
            href="https://joeygil-reddit-client.netlify.app"
            target="_blank"
          >
            <div className="reddit-client">
              {" "}
              <img
                className="reddit-schpeel"
                src={require("../images/reddit-schpeel.png")}
                alt="info on my reddit project"
              />
            </div>
          </a>
          <span className="tags-in-dark"> &#x3c;/div&#x3e; </span>
        </div>
      </div>
    </>
  );
};

export default Main;
