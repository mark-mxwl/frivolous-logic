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
    
    fetch("https://formsubmit.co/ajax/eb8c43897fc22afcc0ab12a33c06407f", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));

    setHasSubmitted(true);
    event.preventDefault();

  };

  return !hasSubmitted ? (
    <div>
      <form
        id="form"
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
          type="text"
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
      <h2 style={{color: 'silver'}}>{`Thanks for the note, ${newUser.name}!`}</h2>
    </div>
  );
}
