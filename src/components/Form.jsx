import { useState, useEffect } from "react";

export default function Form() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setNewUser((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (event) => {
    setHasSubmitted(true);
    event.preventDefault();
    // console.log("Thanks for the note!");
    // console.log(newUser);
  };

  return !hasSubmitted ? (
    <div>
      <form
        id="form"
        method="POST"
        action={`https://formsubmit.co/${import.meta.env.MAILTO_RECIPIENT}`}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name: </label>
        <br />
        <input
          id="name"
          name="name"
          type="text"
          value={newUser.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          id="email"
          name="email"
          type="email"
          value={newUser.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="message">Message:</label>
        <br />
        <textarea
          id="message"
          name="message"
          value={newUser.message}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit" className="form-btn">Submit</button>
      </form>
    </div>
  ) : (
    <div style={{marginTop: '100px'}}>
      <h2 style={{color: 'silver'}}>{`Thanks for the note!`}</h2>
    </div>
  );
}
