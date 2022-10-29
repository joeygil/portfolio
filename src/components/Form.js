import "../App.css";

const Form = () => {
  return (
    <>
      <form
        action="https://public.herotofu.com/v1/b624af70-576e-11ed-b82c-5d75eaa7ccff"
        method="post"
      >
        <input
          name="name"
          type="text"
          className="feedback-input"
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          className="feedback-input"
          placeholder="Email"
        />
        <textarea
          id="about-me-con"
          name="text"
          className="feedback-input"
          placeholder="Comment"
        ></textarea>
        <input type="submit" value="SUBMIT" />
      </form>
    </>
  );
};

export default Form;
