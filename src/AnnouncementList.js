import React from 'react';
import { usePowerCut } from './PowerCutContext';

const AnnouncementList = () => {
  const { announcements } = usePowerCut();

  return (
    <div className="container">
      <h5>Power Cut Announcements</h5>
      <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {announcements.map((item) => (
          <div
            key={item.id}
            className="border p-2 rounded mb-2 bg-light"
          >
            <p><strong>Street:</strong> {item.street}</p>
            <p><strong>Message:</strong> {item.message}</p>
            <p><strong>Time:</strong> {item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementList;
