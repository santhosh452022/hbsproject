import React, { useState } from 'react';
 
const Settingpromotion = () => {
  const [promotions, setPromotions] = useState([]);
  const [newPromotion, setNewPromotion] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editImage, setEditImage] = useState(null);
 
  const handleAddPromotion = () => {
    if (newPromotion) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPromotions([...promotions, reader.result]);
        setNewPromotion(null);
      };
      reader.readAsDataURL(newPromotion);
    }
  };
 
  const handleDeletePromotion = (index) => {
    setPromotions(promotions.filter((_, i) => i !== index));
  };
 
  const handleStartEdit = (index) => {
    setEditingIndex(index);
    setEditImage(promotions[index]);
  };
 
  const handleSaveEdit = () => {
    if (editImage) {
      const updatedPromotions = promotions.map((promo, i) =>
        i === editingIndex ? editImage : promo
      );
      setPromotions(updatedPromotions);
      setEditingIndex(null);
      setEditImage(null);
    }
  };
 
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPromotion(file);
      };
      reader.readAsDataURL(file);
    }
  };
 
  const handleEditImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
 
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px'
  };
 
  const formStyle = {
    marginBottom: '20px'
  };
 
  const inputStyle = {
    display: 'none'
  };
 
  const labelStyle = {
    marginRight: '10px',
    cursor: 'pointer',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px'
  };
 
  const listStyle = {
    listStyleType: 'none',
    padding: '0'
  };
 
  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
  };
 
  const buttonStyle = {
    marginLeft: '10px',
    padding: '5px 10px',
    border: 'none',
    backgroundColor: '#dc3545',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer'
  };
 
  const editButtonStyle = {
    marginLeft: '10px',
    padding: '5px 10px',
    border: 'none',
    backgroundColor: '#28a745',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer'
  };
 
  return (
    <div style={containerStyle}>
      <h1>Promotion Management</h1>
      <div style={formStyle}>
        <label style={labelStyle}>
          Upload Promotion Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={inputStyle}
          />
        </label>
        <button onClick={handleAddPromotion} style={labelStyle}>
          Add Promotion
        </button>
      </div>
      <ul style={listStyle}>
        {promotions.map((promo, index) => (
          <li key={index} style={listItemStyle}>
            {editingIndex === index ? (
              <>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleEditImageChange}
                  style={inputStyle}
                />
                <button onClick={handleSaveEdit} style={editButtonStyle}>Save</button>
              </>
            ) : (
              <>
                <img
                  src={promo}
                  alt={`Promotion ${index}`}
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <button onClick={() => handleStartEdit(index)} style={editButtonStyle}>Edit</button>
                <button onClick={() => handleDeletePromotion(index)} style={buttonStyle}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
 
export default Settingpromotion;
 