import "../App.css";

const Main = () => {
  return (
    <>
      <main>
        <span className="tags-in-top"> &#x3c;h2&#x3e; </span>
        <h2 id="web-dev" className="web-dev">
          💻 frontendDeveloper
        </h2>
        <span className="tags-in-top"> &#x3c;/h2&#x3e; </span>
      </main>
      <br />
      <main className="specialising-in">
        <p className="schpeel">
          Specialising in React, Javascript, CSS and Typescript.
        </p>
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
            className="newsapp-link"
            href="https://joeygil.github.io/frontendmentor-newsapp/"
            target="_blank"
          >
            <div className="news-app">
              <h3 className="project-overlays">newsApp</h3>
              <img
                className="newsapp-schpeel"
                src={require("../images/news-app-schpeel.jpg")}
                alt="info on my todo app project"
              />
            </div>
          </a>

          <a
            className="adventure-link"
            href="https://theadventureapp.netlify.app"
            target="_blank"
          >
            <div className="adventure">
              <h3 className="project-overlays">adventureApp</h3>
              <img
                className="adventure-schpeel"
                src={require("../images/adventure-schpeel.png")}
                alt="info on my todo app project"
              />
            </div>
          </a>

          <a
            className="todo-link"
            href="https://joeygil.github.io/todoapp/"
            target="_blank"
          >
            <div className="todo">
              <h3 className="project-overlays">todoList</h3>
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
              <h3 className="project-overlays">calculatorApp</h3>
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
              <h3 className="project-overlays">redditClient</h3>
              <img
                className="reddit-schpeel"
                src={require("../images/reddit-schpeel.png")}
                alt="info on my reddit project"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Main;
