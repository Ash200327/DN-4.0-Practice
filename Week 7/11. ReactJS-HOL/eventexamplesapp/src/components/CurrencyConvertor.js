import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = () => {
    const value = parseFloat(rupees);
    if (!isNaN(value)) {
      const converted = (value * 0.011).toFixed(2); // approx conversion rate
      setEuro(converted);
    } else {
      alert("Please enter a valid number");
    }
  };

  return (
    <div>
      <h2>Currency Convertor (INR to EUR)</h2>
      <input
        type="text"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter amount in Rupees"
      />
      <button onClick={handleSubmit}>Convert</button>
      <p>Euro: € {euro}</p>
    </div>
  );
};

export default CurrencyConvertor;
