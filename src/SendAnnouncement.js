import React, { useState } from 'react';
import { usePowerCut } from './PowerCutContext';

const SendAnnouncement = () => {
  const { addAnnouncement } = usePowerCut();
  const [street, setStreet] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (street.trim() === '' || message.trim() === '') return;
    addAnnouncement(street, message);
    setStreet('');
    setMessage('');
  };

  return (
    <div className="container my-4">
      <h4>Street Power Cut Announcements</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label>Street Name:</label>
          <input
            type="text"
            className="form-control"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Message:</label>
          <textarea
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Send Announcement</button>
      </form>
    </div>
  );
};

export default SendAnnouncement;
