import React, { useState } from 'react';
import '../styles/reservation-form.css';

const ReservationForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [comment, setComment] = useState('');
  const [peopleCount, setPeopleCount] = useState(1);

  const handlePhoneChange = (e) => setPhoneNumber(e.target.value);
  const handleCommentChange = (e) => setComment(e.target.value);
  const handlePeopleChange = (count) => setPeopleCount(count);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ phoneNumber, comment, peopleCount });
  };

  return (
    <div className="reservation-form">
      <button className="close-button">×</button>
      <h1>Info</h1>
      <p>
        To submit an application for a tour reservation, you need to fill in
        your information and select the number of people for the reservation
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone">Phone number</label>
        <div className="phone-input">
          <img src="path/to/flag.png" alt="Flag" className="flag-icon" />
          <input
            id="phone"
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="+996"
            required
          />
        </div>

        <label htmlFor="comment">Commentaries to trip</label>
        <textarea
          id="comment"
          value={comment}
          onChange={handleCommentChange}
          placeholder="I wish there was JDM"
          rows="3"
        ></textarea>

        <label>Number of People</label>
        <div className="people-input">
          <button
            type="button"
            onClick={() => handlePeopleChange(Math.max(1, peopleCount - 1))}
          >
            –
          </button>
          <input
            type="number"
            value={peopleCount}
            readOnly
          />
          <button
            type="button"
            onClick={() => handlePeopleChange(peopleCount + 1)}
          >
            +
          </button>
          <span>{peopleCount} People</span>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ReservationForm;
