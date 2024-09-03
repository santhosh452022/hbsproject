import React, { useState } from 'react';
 
 
const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  margin: '20px',
  // margin: '0 auto'
};
 
const listStyle = {
  listStyleType: 'none',
  padding: '0'
};
 
const listItemStyle = (isActive) => ({
  margin: '10px 0',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: isActive ? '#d4edda' : '#f8d7da'
});
 
const switchContainerStyle = {
  position: 'relative',
  display: 'inline-block',
  width: '60px',
  height: '34px'
};
 
const switchInputStyle = {
  opacity: '0',
  width: '0',
  height: '0'
};
 
const sliderStyle = (isActive) => ({
  position: 'absolute',
  cursor: 'pointer',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: isActive ? '#4CAF50' : '#ccc',
  transition: '.4s',
  borderRadius: '34px'
});
 
const sliderBeforeStyle = (isActive) => ({
  position: 'absolute',
  content: '""',
  height: '26px',
  width: '26px',
  borderRadius: '50%',
  backgroundColor: 'white',
  transition: '.4s',
  transform: isActive ? 'translateX(26px)' : 'translateX(0)',
  top: '4px',
  left: '4px'
});
 
 
const Settingdealer = () => {
  const [dealers, setdealers] = useState([
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: true },
  ]);
 
  const toggleStatus = (dealerId) => {
    setdealers(dealers.map(dealer =>
      dealer.id === dealerId ? { ...dealer, active: !dealer.active } : dealer
    ));
  };
 
  return (
    <div style={containerStyle}>
      <h1>Dealer Status</h1>
      <ul style={listStyle}>
        {dealers.map(dealer => (
          <li key={dealer.id} style={listItemStyle(dealer.active)}>
            <span>dealer ID: {dealer.id}</span>
            <label style={switchContainerStyle}>
              <input
                type="checkbox"
                checked={dealer.active}
                onChange={() => toggleStatus(dealer.id)}
                style={switchInputStyle}
              />
              <span style={sliderStyle(dealer.active)}></span>
              <span style={sliderBeforeStyle(dealer.active)}></span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
 
export default Settingdealer;