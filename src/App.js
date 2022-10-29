import "./App.css";
import Main from "./components/Main";
import BoxNav from "./components/BoxNav";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Socials from "./components/Socials";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <BoxNav />
      <Main />
      <AboutMe />
      <Certifications />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
