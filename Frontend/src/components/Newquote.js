import React, { useState } from 'react';
import style from './css/newquote.module.css';

const Newquote = () => {
  const [name, setName] = useState('');
  const [quote, setQuote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
        author: name,
        quote: quote
      };
  
      fetch('https://deploy-mern-backend.vercel.app/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
          alert("Response submitted");
          return response.json();
        })
        .then((data) => {
          console.log('Response:', data);
        })
        .catch((error) => {
          console.error('Fetch error:', error);
        });
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <div className={style.formField}>
          <label htmlFor="name">Author:</label>
          <br></br>
          <input
            type="text"
            id="name"
            value={name}
            placeholder={`Author's Name`}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={style.formField}>
          <label htmlFor="quote">Quote:</label>
          <br></br>
          <textarea
            id="quote"
            value={quote}
            placeholder={`Author's Quote`}
            onChange={(e) => setQuote(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={style.button}>
          Add Quote
        </button>
      </form>
    </div>
  );
};

export default Newquote;
