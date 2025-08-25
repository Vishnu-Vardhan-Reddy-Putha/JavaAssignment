
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Your custom components
import GroceryList from './ReactAssignment/GroceryList';
import Car from './ReactAssignment/Car';
import Phone from './ReactAssignment/Phone';
import SweetsList from './ReactAssignment/SweetsList'; 
import Electronics from './ReactAssignment/Electronics'; 
import CanteenMenu from './ReactAssignment/CanteenMenu'; 
import JuiceList from './ReactAssignment/JuiceList';
import Restaurant from './ReactAssignment/RestaurantWithMenuItem';
import TempleList from "./ReactAssignment/TempleList";
import TailorShop from './ReactAssignment/TailorShop';
import Fruits from './ReactAssignment/Fruits';
import TelevisionManager from './ReactAssignment/TelevisionManager';
import MarriageForm from './ReactAssignment/MarriageForm';
import AccessoriesForm from './ReactAssignment/AccessoriesForm';
import BakingForm from './ReactAssignment/BakingForm';
import FlightBookingForm from './ReactAssignment/FlightBookingForm';
import MovieForm from "./ReactAssignment/MovieForm";

// Conditional rendering components
import LoadingComponent from './ReactAssignment/LoadingComponent';
import ErrorComponent from './ReactAssignment/ErrorComponent';
import ProductComponent from './ReactAssignment/ProductComponent';

import RestaurantForm from './ReactAssignment/RestaurantForm';

import FruitCommunication from './ReactAssignment/FruitCommunication';

// Furniture Components
import { Chair, Table, Sofa, Bed } from './ReactAssignment/FurnitureComponents';
import ChessTournamentForm from './ChessTournamentForm';

import RegistrationForm from './RegistrationForm';

import TailoringInventory from './TailoringInventory';

import PlayerManager from './PlayerManager';

import { PowerCutProvider } from './PowerCutContext';
import SendAnnouncement from './SendAnnouncement';
import AnnouncementList from './AnnouncementList';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import {
  Home, AddTaxpayer, TaxpayerList, CalculateTax,
  TaxRates, Contact, About, FAQ, NotFound
} from './Pages';




function App() {
  const groceries = ["Rice", "wheat", "Sugar", "Milk", "Oil"];

  // Conditional rendering state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); 
  const [product, setProduct] = useState(null);

  // Furniture dropdown state
  const [selectedFurniture, setSelectedFurniture] = useState('Chair');

  // Festival app state
  const [festival, setFestival] = useState('Diwali');
  const [countdown, setCountdown] = useState(5);

  // Simulate API call for product (Conditional Rendering task)
  useEffect(() => {
    setTimeout(() => {
      const success = true; // Toggle this to false to simulate error

      if (success) {
        const productData = {
          name: "Sony Bravia TV",
          brand: "Sony",
          price: 65000,
          category: "TV",
          warranty: 2,
          availability: true
        };
        setProduct(productData);
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    }, 2000);
  }, []);

  // Dropdown change handler
  const handleChange = (e) => {
    setSelectedFurniture(e.target.value);
  };

  // Furniture render switch
  const renderFurniture = () => {
    switch (selectedFurniture) {
      case 'Chair':
        return <Chair />;
      case 'Table':
        return <Table />;
      case 'Sofa':
        return <Sofa />;
      case 'Bed':
        return <Bed />;
      default:
        return <p>Please select a furniture item.</p>;
    }
  };

  // Q1: Festival App Rendered (every render)
  useEffect(() => {
    console.log('Festival App Rendered');
  });

  // Q2: Welcome alert (runs once)
  useEffect(() => {
    alert('Welcome to Diwali Festival App');
  }, []);

  // Q3: Log when festival changes
  useEffect(() => {
    if (festival !== 'Diwali') {
      console.log(`Festival changed to ${festival}. Seconds left: ${countdown}`);
    }
  }, [festival]);

  // Q4: Countdown timer with cleanup
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Q5: Combined dependency log
  useEffect(() => {
    console.log(`Festival or Countdown changed: ${festival}, ${countdown}`);
  }, [festival, countdown]);

  // Festival changer
  const changeFestival = () => {
    setFestival((prev) => {
      if (prev === 'Diwali') return 'Holi';
      if (prev === 'Holi') return 'Pongal';
      return 'Diwali';
    });
  };

  return (
    <div className="App container py-4">

      {/* Existing Components */}
      <GroceryList items={groceries} />
      <Car brand="Toyota" model="Fortuner" color="Black" year="2022" />
      <Phone />
      <SweetsList />
      <Electronics />
      <CanteenMenu />
      <JuiceList />
      <Restaurant name="Spice Hub" location="Block B, First Floor" openHours="10:00 AM – 10:00 PM" />
      <TempleList />
      <TailorShop />
      <Fruits />
      <TelevisionManager />
      <MarriageForm />

      <section className="mb-5">
        <h2 className="mb-3">Accessories Form</h2>
        <AccessoriesForm />
      </section>

      <hr />

      <section className="mt-5">
        <h2 className="mb-3">Baking Items Form</h2>
        <BakingForm />
      </section>

      <FlightBookingForm />
      <MovieForm />

      {/* Conditional Rendering Task */}
      <section className="mb-5">
        <h2 className="mb-3">Lab Question: Conditional Rendering with Multiple Components</h2>
        {
          loading
            ? <LoadingComponent />
            : error
              ? <ErrorComponent />
              : <ProductComponent product={product} />
        }
      </section>

      {/* Furniture Switch-case Task */}
      <section className="mb-5">
        <h2 className="mb-3">🪑 Furniture Store</h2>
        <select className="form-select w-25 mb-3" onChange={handleChange} value={selectedFurniture}>
          <option value="Chair">Chair</option>
          <option value="Table">Table</option>
          <option value="Sofa">Sofa</option>
          <option value="Bed">Bed</option>
        </select>
        {renderFurniture()}
      </section>

      {/* Festival App */}
      <section className="mb-5">
        <h2>🎉 Festival React App</h2>
        <p><strong>Current Festival:</strong> {festival}</p>
        <p><strong>Countdown:</strong> {countdown}</p>
        <button className="btn btn-primary" onClick={changeFestival}>
          Change Festival
        </button>
      </section>

         <RestaurantForm />
         <FruitCommunication />
         <ChessTournamentForm />
         <RegistrationForm />
         <TailoringInventory />
          <PlayerManager />

          
        <PowerCutProvider>
      <SendAnnouncement />
      <AnnouncementList />
    </PowerCutProvider>


    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-taxpayer" element={<AddTaxpayer />} />
        <Route path="/taxpayer-list" element={<TaxpayerList />} />
        <Route path="/calculate-tax" element={<CalculateTax />} />
        <Route path="/tax-rates" element={<TaxRates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
        
         

    </div>
  );
}

export default App; 


