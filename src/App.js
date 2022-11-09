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
      "be there in a minute...",
      "on my way!",
      "i'll meet you here in 1 second...",
    ];
    let index = Math.floor(Math.random() * textArray.length);
    setLoadingText(textArray[index]);
  }, []);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  setTimeout(() => {
    document.querySelector("body").style.backgroundSize = "cover";
  }, 4000);

  return (
    <div className="wrapper">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader loader-spinner"></div>
          <br />
          <h2 className="loading-text">{loadingText}</h2>
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
