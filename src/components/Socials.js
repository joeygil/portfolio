import "../App.css";
import Form from "./Form";

const Socials = () => {
  return (
    <>
      <div className="socials-container background">
        <div className="socials">
          <h2>
            <div className="wave">👋</div>
            "Ey up!"
          </h2>
          <p className="get-in-touch">
            Get in touch below if you have any questions, or comments!
          </p>
          <Form />
        </div>
      </div>
    </>
  );
};

export default Socials;
