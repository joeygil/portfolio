import "../App.css";
import Form from "./Form";

const Socials = () => {
  return (
    <>
      <div className="socials-container background">
        <div className="socials">
          <h2>
            <div className="wave">👋</div>
            <span id="socials-tags" className="tags-in-dark">
              {" "}
              &#x3c;h2&#x3e;{" "}
            </span>{" "}
            "Ey up!"
            <span id="socials-tags" className="tags-in-dark">
              {" "}
              &#x3c;/h2&#x3e;{" "}
            </span>
          </h2>
          <p className="get-in-touch">
            Get in touch below if you have any questions, comments or... 🤞 job
            offers!
          </p>
          <Form />
        </div>
      </div>
    </>
  );
};

export default Socials;
