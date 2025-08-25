import React, { Component } from 'react';

class MenuItem extends Component {
  render() {
    const { name, price, category, available } = this.props;
    return (
      <li>
        {name} - ₹{price} ({category}), {available ? 'Available' : 'Not Available'}
      </li>
    );
  }
}

class Restaurant extends Component {
  render() {
    const { name, location, openHours } = this.props;

    return (
      <div>
        <h2>Restaurant Name: {name}</h2>
        <p><b>Location:</b> {location}</p>
        <p><b>Open Hours:</b> {openHours}</p>

        <h3>Restaurant Menu:</h3>
        <ul>
          <MenuItem name="Paneer Butter Masala" price={150} category="Main Course" available={true} />
          <MenuItem name="Chicken Biryani" price={200} category="Main Course" available={true} />
          <MenuItem name="Masala Dosa" price={80} category="Breakfast" available={true} />
          <MenuItem name="Gulab Jamun" price={40} category="Dessert" available={false} />
          <MenuItem name="Veg Thali" price={120} category="Combo" available={true} />
        </ul>
      </div>
    );
  }
}

export default Restaurant;
