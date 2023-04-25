import React, { useState, useEffect } from 'react';

function PriceMenu() {
  const [selectedPrice, setSelectedPrice] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [money, setMoney] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const price = parseInt(selectedPrice.slice(-1));
    const totalPrice = price * quantity;
    setTotalPrice(totalPrice);
  }, [selectedPrice, quantity]);

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleMoneyChange = (event) => {
    setMoney(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (money >= totalPrice) {
      setMoney(money - totalPrice);
      setMessage('Thank you for your purchase!');
    } else {
      setMessage('You do not have enough money to buy this item.');
    }
  };

  return (
    <div>
      <h2>Choose a price:</h2>
      <select value={selectedPrice} onChange={handlePriceChange}>
        <option value="">Select a price</option>
        <option value="Price 1">COCACOLA $1</option>
        <option value="Price 2">$2</option>
        <option value="Price 3">$3</option>
        <option value="Price 4">$4</option>
      </select>
      <br />
      {selectedPrice !== '' &&
        <div>
          <h3>Price: {selectedPrice}</h3>
          <label>
            Quantity:
            <input type="number" value={quantity} onChange={handleQuantityChange} />
          </label>
          <br />
          <h3>Total Price: ${totalPrice}</h3>
          <label>
            Money:
            <input type="number" value={money} onChange={handleMoneyChange} />
          </label>
          <br />
          <button onClick={handleSubmit}>Submit</button>
          {message && <p>{message}</p>}
        </div>
      }
    </div>
  );
}

export default PriceMenu;
