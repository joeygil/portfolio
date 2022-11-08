import "./App.css";
import Main from "./components/Main";
import BoxNav from "./components/BoxNav";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Socials from "./components/Socials";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import ReactLoading from "react-loading";
import { useState, useEffect } from "react";
import Loader from "react-loaders";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <div className="wrapper">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader">
            <ReactLoading type={"bars"} color={"mediumorchid"} />

            <h2 className="loading-text">Loading...</h2>
          </div>
        </div>
      ) : (
        <>
          <div className="wrapper">
            <Header />
            <BoxNav />
            <Main />
            <AboutMe />
            <Certifications />
            <Socials />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
