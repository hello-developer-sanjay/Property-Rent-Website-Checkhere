import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyList from './containers/PropertyList';
import PropertyDetails from './components/PropertyDetails';
import StickyHeader from './components/StickyHeader';

const App = () => {
  const [selectedCity, setSelectedCity] = useState('');

  return (
    <Router>
      <StickyHeader
        selectedCity={selectedCity}
        onCityChange={setSelectedCity}
      />
      <Routes>
        <Route path="/" element={<PropertyList selectedCity={selectedCity} />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
