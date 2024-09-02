import React, { useState } from "react";
 
function Settingpriceupload() {
  const initialItems = [
    { id: 1, title: "PLASTIC", cost: 500, isEditing: false },
    { id: 2, title: "CARBOARD", cost: 556, isEditing: false },
    { id: 3, title: "COCONUT SHELL", cost: 500, isEditing: false },
    { id: 4, title: "SYNTEX TANKS", cost: 500, isEditing: false },
    { id: 5, title: "GLASSES", cost: 570, isEditing: false },
    { id: 6, title: "IRON", cost: 556, isEditing: false },
    { id: 7, title: "E-WASTE", cost: 556, isEditing: false },
    { id: 8, title: "NOTE & BOOKS", cost: 556, isEditing: false },
    { id: 9, title: "PVC PIPES", cost: 556, isEditing: false },
    { id: 10, title: "BRONZE", cost: 556, isEditing: false },
    { id: 11, title: "ALUMINIUM", cost: 556, isEditing: false },
    { id: 12, title: "COPPER", cost: 556, isEditing: false },
    { id: 13, title: "BATTERIES", cost: 556, isEditing: false },
    { id: 14, title: "TYRES", cost: 556, isEditing: false },
    { id: 15, title: "ELECTRICAL WIRES", cost: 556, isEditing: false },
  ];
 
  const [items, setItems] = useState(initialItems);
  const [searchQuery, setSearchQuery] = useState("");
 
  const handleEditClick = (id) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, isEditing: !item.isEditing } : item
    );
    setItems(updatedItems);
  };
 
  const handlePriceChange = (id, event) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, cost: Number(event.target.value) } : item
    );
    setItems(updatedItems);
  };
 
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };
 
  const filteredItems = items
    .filter(item => item.title.toLowerCase().includes(searchQuery))
    .sort((a, b) => a.title.toLowerCase().indexOf(searchQuery) - b.title.toLowerCase().indexOf(searchQuery));
 
  return (
    <>
      <div className="topbottom">
        <div className="row m-0 p-0">
          <div
            style={{
              display: "flex",
              padding: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{ fontSize: "55px", fontWeight: "800", color: "#000" }}
            >
              UPDATE SCRAP PRICES
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              style={{
                fontSize: "16px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                width: "300px",
              }}
            />
          </div>
          {filteredItems.map(item => (
            <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="homecard">
                <p
                  style={{
                    color: "#000",
                    fontSize: "20px",
                    fontWeight: "600",
                    marginTop: "15px",
                  }}
                >
                  Title:{" "}
                  <span
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    {item.title}
                  </span>
                </p>
                <p
                  style={{ color: "#000", fontSize: "20px", fontWeight: "600" }}
                >
                  Price:{" "}
                  {item.isEditing ? (
                    <input
                      value={item.cost}
                      onChange={(event) => handlePriceChange(item.id, event)}
                      style={{ fontSize: "16px", fontWeight: "600", width: "100px" }}
                    />
                  ) : (
                    <span
                      style={{
                        color: "#000",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      ₹{item.cost}
                    </span>
                  )}
                </p>
                <button
                  onClick={() => handleEditClick(item.id)}
                  style={{
                    backgroundColor: item.isEditing ? "#28a745" : "#777",
                    color: "#fff",
                    border: "none",
                    padding: "10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  {item.isEditing ? "Save" : "Edit"}
                </button>
                {item.isEditing && (
                  <button
                    onClick={() => handleEditClick(item.id)}
                    style={{
                      backgroundColor: "#777",
                      color: "#fff",
                      border: "none",
                      padding: "10px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
 
export default Settingpriceupload;