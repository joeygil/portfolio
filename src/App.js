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

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("");

  useEffect(() => {
    const textArray = [
      "nearly there...",
      "patience is a virtue...",
      "good things come to those who wait...",
      "hang on a sec...",
      "won't be long...",
      "i'll be with you in 2 secs...",
      "take a seat, i'll be with you shortly",
      "just turning your corner now...",
    ];
    let index = Math.floor(Math.random() * textArray.length);
    setLoadingText(textArray[index]);
  }, []);

  const pickLoadingText = setTimeout(() => {
    setIsLoading(false);
  }, 2200);

  setTimeout(() => {
    document.querySelector("body").style.backgroundSize = "cover";
  }, 3200);

  return (
    <div className="wrapper">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader">
            <ReactLoading type={"spinningBubbles"} color={"mediumorchid"} />
            <h2 className="loading-text">{loadingText}</h2>
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
