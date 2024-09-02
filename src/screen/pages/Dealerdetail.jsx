import { useLocation } from 'react-router-dom';
import React, { useState, useRef } from "react";


function Dealerdetail() {
    const location = useLocation();
    const { dealer } = location.state || {};
    let status ="";
    const dealer_id= dealer.Dealer_ID;
    console.log(dealer.Aadhar_Img);

    // console.log("The id is ",id);
    

    const declineButton = async (e) => {
      e.preventDefault();

      status =  "extradata";
      

      console.log("Decline Button Clicked",status);

      try{

          const response = await fetch('https://django-djreact-app-d5af3d4e3559.herokuapp.com/StatusActive/', {
            method:'POST',
            body: JSON.stringify({ status,dealer_id }), // Send the variable as JSON
            headers:{
              'Content-Type': 'application/json',
              'X-CSRFToken': getCookie('csrftoken'),
            },
        });
        if (response.ok){
          const data = await response.json();
        }else{
          const data = await response.json();
        }
      }catch(e){
        console.log("Error:",e);
        
      }
  }
    const approveButton = async (e) => {
        e.preventDefault();
        status = "approved";

        console.log("Approve Button Clicked",status);


        try{
            const response = await fetch('https://django-djreact-app-d5af3d4e3559.herokuapp.com/StatusActive/', {
              method:'POST',
              body: JSON.stringify({ status,dealer_id }), // Send the variable as JSON
              headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken'),
              },
          });
          if (response.ok){
            const data = await response.json();
          }else{
            const data = await response.json();
          }
        }catch(e){
          console.log("Error:",e);
          
        }
    }



    if (!dealer) {
        return <p>No dealer information available.</p>;
    }

    return (
        <div className="container-fluid" style={{flexDirection:"column"}}>
          <div style={{paddingBottom:"40px"}}>
          <h3 style={{fontWeight:"bold"}}>Dealer Details</h3>
            <p><strong>ID:</strong> {dealer.Dealer_ID}</p>
            <p><strong>Name:</strong> {dealer.Dealer_Name}</p>
            <p><strong>Phone:</strong> {dealer.phone}</p>
            <p><strong>Mail:</strong> {dealer.mail}</p>
            <p><strong>DoB:</strong> {dealer.DOB}</p>
            <p><strong>Aadhar Card Number:</strong> {dealer.Aadhar_No}</p>
            <p><strong>AadharCard Pdf:</strong>            </p> 

            <img
                    src={dealer.Aadhar_Img}
                    style={{ height: "310px", width: "300px",borderRadius:"5px" }}
            />
            <p><strong>Pancard Number:</strong> {dealer.PAN_No}</p>
            <p><strong>Pancard Pdf:</strong>     </p>        

            <img
                    src={dealer.PAN_Img}
                    style={{ height: "310px", width: "300px",borderRadius:"5px" }}
            />            
            <p><strong>Driving Number:</strong> {dealer.LICENSE_No}</p>
            <p><strong>License Pdf:</strong> </p>            

            <img
                    src={dealer.LICENSE_Img}
                    style={{ height: "310px", width: "300px",borderRadius:"5px" }}
            />            
            <p><strong>Vehicle Number:</strong> {dealer.Vehicle_No}</p>
            <p><strong>Vehicle Pdf:</strong>  </p>           
            <img src={dealer.Vehicle_Img} style={{ height: "310px", width: "300px",borderRadius:"5px" }}/>
            <p><strong>Vehicle Type:</strong> {dealer.Vehicle_Type}</p>
            <p><strong>Bank Number:</strong> {dealer.Account_NO}</p>
            <p><strong>IFSC code:</strong> {dealer.IFSC_CODE}</p>
            <p><strong>Bank User Name:</strong> {dealer.Account_Name}</p>
            <p><strong>Address:</strong> {dealer.Address}</p>
            <p><strong>City:</strong> {dealer.City}</p>
            <p><strong>State:</strong> {dealer.State}</p>
            <p><strong>Postcode:</strong> {dealer.POST_CODE}</p>
            <p><strong>Nationality:</strong> {dealer.Nationality}</p>  
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <button className='statusbutton' onClick={approveButton}>Approved</button>
                <button className='statusbutton' onClick={declineButton}>Rejected</button>
                <div style={{}}>
                    <span style={{fontSize:"20px",fontWeight: "700"}}>Enter queries/ Requirements :</span>
                <input/>
                </div>
            </div>    
          </div>
        </div>
    );
}


const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };
export default Dealerdetail;
