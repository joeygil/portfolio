import "../App.css";

const Main = () => {
  const handleNewsModal = () => {
    document.getElementById("newsModal").style.width = "100%";
    document.getElementById("newsModal").style.opacity = "1";
  };

  const handleCloseNewsModal = () => {
    document.getElementById("newsModal").style.width = "0";
    document.getElementById("newsModal").style.opacity = "0";
  };

  const handleAdventureModal = () => {
    document.getElementById("adventureModal").style.width = "100%";
    document.getElementById("adventureModal").style.opacity = "1";
  };

  const handleCloseAdventureModal = () => {
    document.getElementById("adventureModal").style.width = "0";
    document.getElementById("adventureModal").style.opacity = "0";
  };

  const handleTodoModal = () => {
    document.getElementById("todoModal").style.width = "100%";
    document.getElementById("todoModal").style.opacity = "1";
  };

  const handleCloseTodoModal = () => {
    document.getElementById("todoModal").style.width = "0";
    document.getElementById("todoModal").style.opacity = "0";
  };

  const handleCalculatorModal = () => {
    document.getElementById("calculatorModal").style.width = "100%";
    document.getElementById("calculatorModal").style.opacity = "1";
  };

  const handleCloseCalculatorModal = () => {
    document.getElementById("calculatorModal").style.width = "0";
    document.getElementById("calculatorModal").style.opacity = "0";
  };

  const handleRedditModal = () => {
    document.getElementById("redditModal").style.width = "100%";
    document.getElementById("redditModal").style.opacity = "1";
  };

  const handleCloseRedditModal = () => {
    document.getElementById("redditModal").style.width = "0";
    document.getElementById("redditModal").style.opacity = "0";
  };

  const handleFurnitureModal = () => {
    document.getElementById("furnitureModal").style.width = "100%";
    document.getElementById("furnitureModal").style.opacity = "1";
  };

  const handleCloseFurnitureModal = () => {
    document.getElementById("furnitureModal").style.width = "0";
    document.getElementById("furnitureModal").style.opacity = "0";
  };

  const handleWeatherModal = () => {
    document.getElementById("weatherModal").style.width = "100%";
    document.getElementById("weatherModal").style.opacity = "1";
  };

  const handleCloseWeatherModal = () => {
    document.getElementById("weatherModal").style.width = "0";
    document.getElementById("weatherModal").style.opacity = "0";
  };

  const handleEmmaModal = () => {
    document.getElementById("emmaModal").style.width = "100%";
    document.getElementById("emmaModal").style.opacity = "1";
  };

  const handleCloseEmmaModal = () => {
    document.getElementById("emmaModal").style.width = "0";
    document.getElementById("emmaModal").style.opacity = "0";
  };

  return (
    <>
      {/* MODALS */}

      <div id="newsModal" className="modal">
        <div className="modal-content">
          <span onClick={handleCloseNewsModal} className="close">
            x
          </span>
          <img
            className="modal-main-image"
            src={require("../images/newsapp.jpg")}
            alt="news app preview"
          />

          <span className="modal-info">
            <h3>frontendmentor.io News App Challenge</h3>
            Used HTML, CSS, Javascript and React to build a replica news page.
            This frontendmentor.io challenge was completed using CSS Grid and
            Flexbox for the layout.
            <hr />
            <span>
              <span>Live</span>
              <a
                href="https://joeygil.github.io/frontendmentor-newsapp/"
                target="_blank"
                aria-label="view the live website"
              >
                <img
                  className="modal-icons"
                  src={require("../images/link.png")}
                  alt="link to live website"
                />
              </a>
            </span>
            <span>
              <span>Github</span>
              <a
                href="https://github.com/joeygil/frontendmentor-newsapp"
                target="_blank"
                aria-label="view the github repo"
              >
                <img
                  className="modal-icons"
                  src={require("../images/github-logo.png")}
                  alt="github logo"
                />
              </a>
            </span>
          </span>
        </div>
      </div>

      {/* ADVENTURE MODAL */}

      <div id="adventureModal" className="modal">
        <div className="modal-content">
          <span onClick={handleCloseAdventureModal} className="close">
            x
          </span>
          <img
            className="modal-main-image"
            src={require("../images/adventureapp.jpg")}
            alt="adventure app preview"
          />

          <span className="modal-info">
            <h3>Adventure App</h3>
            Used HTML, CSS, Javascript, React and the Fetch API to build an app
            to pick an adventure for my wife and I to go on. It will allow you
            to add adventures to the json file via POST request and receive a
            suggestion from the json based on some simple filters via GET. We
            use it when we're at a loose end!
            <hr />
            <span>
              <span>Live</span>
              <a
                href="https://theadventureapp.netlify.app"
                target="_blank"
                aria-label="view the live website"
              >
                <img
                  className="modal-icons"
                  src={require("../images/link.png")}
                  alt="link to live site"
                />
              </a>
            </span>
            <span>
              <span>Github</span>
              <a
                href="https://github.com/joeygil/adventure-app"
                target="_blank"
                aria-label="view the github repo"
              >
                <img
                  className="modal-icons"
                  src={require("../images/github-logo.png")}
                  alt="link to github repo"
                />
              </a>
            </span>
          </span>
        </div>
      </div>

      {/* TODO MODAL */}

      <div id="todoModal" className="modal">
        <div className="modal-content">
          <span onClick={handleCloseTodoModal} className="close">
            x
          </span>

          <img
            className="modal-main-image"
            src={require("../images/todo-app.jpg")}
            alt="todo app preview"
          />

          <span className="modal-info">
            <h3>Todo List App</h3>
            A basic to do list app build using HTML, CSS and Javascript. Users
            can add, remove and tick off items in their list.
            <hr />
            <span>
              <span>Live</span>
              <a
                href="https://joeygil.github.io/todoapp/"
                target="_blank"
                aria-label="view the live website"
              >
                <img
                  className="modal-icons"
                  src={require("../images/link.png")}
                  alt="link to live site"
                />
              </a>
            </span>
            <span>
              <span>Github</span>
              <a
                href="https://github.com/joeygil/todoapp"
                target="_blank"
                aria-label="view the github repo"
              >
                <img
                  className="modal-icons"
                  src={require("../images/github-logo.png")}
                  alt="link to github repo"
                />
              </a>
            </span>
          </span>
        </div>
      </div>

      {/* CALCULATOR MODAL */}

      <div id="calculatorModal" className="modal">
        <div className="modal-content">
          <span onClick={handleCloseCalculatorModal} className="close">
            x
          </span>
          <img
            className="modal-main-image"
            src={require("../images/calculator.jpg")}
            alt="calculator app preview"
          />

          <span className="modal-info">
            <h3>Calculator App</h3>
            A simple calculator app with a realistic old school digital screen.
            Built using HTML, CSS and Javascript in React, this app allows users
            to make basic maths calculations.
            <hr />
            <span>
              <span>Live</span>
              <a
                href="https://joeygil.github.io/calculator/"
                target="_blank"
                aria-label="view the live website"
              >
                <img
                  className="modal-icons"
                  src={require("../images/link.png")}
                  alt="link to live site"
                />
              </a>
            </span>
            <span>
              <span>Github</span>
              <a
                href="https://github.com/joeygil/calculator"
                target="_blank"
                aria-label="view the github repo"
              >
                <img
                  className="modal-icons"
                  src={require("../images/github-logo.png")}
                  alt="link to github repo"
                />
              </a>
            </span>
          </span>
        </div>
      </div>

      {/* REDDIT CLIENT MODAL */}

      <div id="redditModal" className="modal">
        <div className="modal-content">
          <span onClick={handleCloseRedditModal} className="close">
            x
          </span>
          <img
            className="modal-main-image"
            src={require("../images/reddit-client.jpg")}
            alt="reddit client preview"
          />

          <span className="modal-info">
            <h3>Reddit Client</h3>
            Built using HTML, CSS, Javascript in React, this app uses the fetch
            API to retrieve data from Reddit. Users can either search posts or
            fetch the top current posts and have them rendered on screen. These
            previews are clickable links to Reddit itself.
            <hr />
            <span>
              <span>Live</span>
              <a
                href="https://joeygil-reddit-client.netlify.app/"
                target="_blank"
                aria-label="view the live website"
              >
                <img
                  className="modal-icons"
                  src={require("../images/link.png")}
                  alt="link to live site"
                />
              </a>
            </span>
            <span>
              <span>Github</span>
              <a
                href="https://github.com/joeygil/reddit-client"
                target="_blank"
                aria-label="view the github repo"
              >
                <img
                  className="modal-icons"
                  src={require("../images/github-logo.png")}
                  alt="link to github repo"
                />
              </a>
            </span>
          </span>
        </div>
      </div>

      {/* FURNITURE MODAL */}

      <div id="furnitureModal" className="modal">
        <div className="modal-content">
          <span onClick={handleCloseFurnitureModal} className="close">
            x
          </span>
          <img
            className="modal-main-image"
            src={require("../images/frontendmentor-room.jpg")}
            alt="furniture app preview"
          />

          <span className="modal-info">
            <h3>frontendmentor.io Furniture App</h3>
            Built using HTML, CSS, Javascript in React, this frontendmentor.io
            challenge required that we recreate an app for a furniture store. I
            used CSS Grid and Flexbox for the layout and built a Javascript
            image changing hero banner at the top of the page.
            <hr />
            <span>
              <span>Live</span>
              <a
                href="https://joeygil.github.io/room-homepage-master/"
                target="_blank"
                aria-label="view the live website"
              >
                <img
                  className="modal-icons"
                  src={require("../images/link.png")}
                  alt="link to live site"
                />
              </a>
            </span>
            <span>
              <span>Github</span>
              <a
                href="https://github.com/joeygil/room-homepage-master"
                target="_blank"
                aria-label="view the github repo"
              >
                <img
                  className="modal-icons"
                  src={require("../images/github-logo.png")}
                  alt="link to githib repo"
                />
              </a>
            </span>
          </span>
        </div>
      </div>

      {/* WEATHER MODAL  */}

      <div id="weatherModal" className="modal">
        <div className="modal-content">
          <span onClick={handleCloseWeatherModal} className="close">
            x
          </span>
          <img
            className="modal-main-image"
            src={require("../images/weather.png")}
            alt="weather app preview"
          />

          <span className="modal-info">
            <h3>Live Weather App</h3>
            Built using HTML, CSS, Javascript in React, this app uses the Fetch
            API to GET live weather information from anywhere in the world.
            Users can search any city worldwide and receive conditions,
            including temperature, wind direction, wind speed and a general
            description.
            <hr />
            <span>
              <span>Live</span>
              <a
                href="https://joeygil.github.io/weather-app/"
                target="_blank"
                aria-label="view the live website"
              >
                <img
                  className="modal-icons"
                  src={require("../images/link.png")}
                  alt="link to live site"
                />
              </a>
            </span>
            <span>
              <span>Github</span>
              <a
                href="https://github.com/joeygil/weather-app"
                target="_blank"
                aria-label="view the github repo"
              >
                <img
                  className="modal-icons"
                  src={require("../images/github-logo.png")}
                  alt="link to github repo"
                />
              </a>
            </span>
          </span>
        </div>
      </div>

      <div id="emmaModal" className="modal">
        <div className="modal-content">
          <span onClick={handleCloseEmmaModal} className="close">
            x
          </span>
          <img
            className="modal-main-image"
            src={require("../images/emmagraingerhair.jpg")}
            alt="emma grainger hair app preview"
          />

          <span className="modal-info">
            <h3>Emma Grainger Hair</h3>
            Built using HTML, TailwindCSS, Framer Motion and Javascript in
            React, this interactive web app for a local hair salon provides
            information on services and an online booking system.
            <hr />
            <span>
              <span>Live</span>
              <a
                href="https://emmagrainger.hair"
                target="_blank"
                aria-label="view the live website"
              >
                <img
                  className="modal-icons"
                  src={require("../images/link.png")}
                  alt="link to live site"
                />
              </a>
            </span>
            <span>
              <span>Github</span>
              <a
                href="https://github.com/joeygil/emmagraingerhair"
                target="_blank"
                aria-label="view the github repo"
              >
                <img
                  className="modal-icons"
                  src={require("../images/github-logo.png")}
                  alt="link to github repo"
                />
              </a>
            </span>
          </span>
        </div>
      </div>

      {/* MODAL END */}
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

          <a className="emmagrainger-link" target="_blank">
            <div className="emmagrainger" onClick={handleEmmaModal}>
              <h3 className="project-overlays">emmaGraingerHair</h3>
              {/* <img
                className="newsapp-schpeel"
                src={require("../images/news-app-schpeel.jpg")}
                alt="info on my todo app project"
              /> */}
            </div>
          </a>

          <a className="todo-link" target="_blank">
            <div className="news-app" onClick={handleNewsModal}>
              <h3 className="project-overlays">newsApp</h3>
              {/* <img
                className="newsapp-schpeel"
                src={require("../images/news-app-schpeel.jpg")}
                alt="info on my todo app project"
              /> */}
            </div>
          </a>

          <a className="adventure-link" target="_blank">
            <div className="adventure" onClick={handleAdventureModal}>
              <h3 className="project-overlays">adventureApp</h3>
              {/* <img
                className="adventure-schpeel"
                src={require("../images/adventure-schpeel.png")}
                alt="info on my todo app project"
              /> */}
            </div>
          </a>

          <a className="todo-link" target="_blank">
            <div className="todo" onClick={handleTodoModal}>
              <h3 className="project-overlays">todoList</h3>
              {/* <img
                className="todo-schpeel"
                src={require("../images/todo-app-schpeel.png")}
                alt="info on my todo app project"
              /> */}
            </div>
          </a>
          <a className="calculator-link" target="_blank">
            <div
              id="calculator"
              className="calculator"
              onClick={handleCalculatorModal}
            >
              <h3 className="project-overlays">calculatorApp</h3>
              {/* <img
                className="calculator-schpeel"
                src={require("../images/calculator-schpeel.png")}
                alt="info on my calculator project"
              /> */}
            </div>
          </a>
          <a className="reddit-link" target="_blank">
            <div className="reddit-client" onClick={handleRedditModal}>
              <h3 className="project-overlays">redditClient</h3>
              {/* <img
                className="reddit-schpeel"
                src={require("../images/reddit-schpeel.png")}
                alt="info on my reddit project"
              /> */}
            </div>
          </a>

          <a className="furniture-link" target="_blank">
            <div className="furniture" onClick={handleFurnitureModal}>
              <h3 className="project-overlays">roomFurniture</h3>
              {/* <img
                className="furniture-schpeel"
                src={require("../images/furniture-schpeel.png")}
                alt="info on my frontendmentor room project"
              /> */}
            </div>
          </a>

          <a className="weather-link" target="_blank">
            <div className="weather" onClick={handleWeatherModal}>
              <h3 className="project-overlays">liveWeather</h3>
              {/* <img
                className="newsapp-schpeel"
                src={require("../images/news-app-schpeel.jpg")}
                alt="info on my todo app project"
              /> */}
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Main;
