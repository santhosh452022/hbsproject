import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";


function Dealer() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://django-djreact-app-d5af3d4e3559.herokuapp.com/fetchDealerDetails/')
      .then(response => response.json())
      .then(data =>{ 
        setData(data);     

        setLoading(false)
    })
      .catch(error => console.error('Error fetching data:', error));
  }, []);



  const dealers = [];
   
    for (let i = 0; i < data.length; i++) {
      dealers.push({
        Dealer_Name: data[i].Dealer_Name,
        mail: data[i].mail_id,
        phone: data[i].Phone_Number,
        Dealer_ID: data[i].Dealer_ID,
        DOB: data[i].DOB,
        Address: data[i].Address,
        Nationality: data[i].Nationality,
        Aadhar_No: data[i].Aadhar_No,
        Aadhar_Img:data[i].Aadhar_Photo,
        PAN_No: data[i].PAN_No,
        PAN_Img:data[i].PAN_Photo,
        LICENSE_No: data[i].LICENSE_No,
        LICENSE_Img:data[i].LICENSE_Photo,
        Vehicle_Img:data[i].Vehicle_Photo,
        Vehicle_No: data[i].Vehicle_No,
        Account_NO: data[i].Bank_Acc,
        IFSC_CODE: data[i].IFSC_CODE,
        Account_Name: data[i].Bank_AccountName,
        Vehicle_Type: data[i].Vehicle_Type,
        POST_CODE: data[i].Post_Code,
        City: data[i].City,
        State: data[i].State,
        Nationality: data[i].Nationality

   
       
      });
    }




  // const dealers = [
  //   {
  //     id: 1,
  //     name: "Dealer Name 1",
  //     phone: "000-000-0000",
  //     mail: "@twitter",
  //     Dob: "DD/MM/YYYY",
  //     aadharnum: "0000-0000-0000",
  //     aadharimg: "pdf",
  //     pancardnum: "ddddd",
  //     pancardimg: "pdf",
  //     drivingnum: "dddd",
  //     drivingimg: "pdf",
  //     vehiclenum: "num000",
  //     vehicletype: "2 wheeler",
  //     banknum: "000000",
  //     ifsc: "IFSCcode",
  //     bankuser: "acc user Name",
  //     address: "address",
  //     city: "city",
  //     state: "state",
  //     postcode: "000 000",
  //     nationality: "nationality",
  //   }
  // ];

  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="card-box">
        <table className="table">
          <thead>
            <tr>
              <th>No:</th>
              <th>Dealer Name:</th>
              <th>Phone Number:</th>
              <th>Mail ID:</th>
            </tr>
          </thead>
          <tbody>
            {dealers.map((dealer) => (
              <tr key={dealer.Dealer_ID}>
                <th scope="row">{dealer.Dealer_ID}</th>
                <td
                  className="dealername"
                  onClick={() =>
                    navigate("/dealerdetail", { state: { dealer } })
                  }
                >
                  {dealer.Dealer_Name}
                </td>
                <td>{dealer.phone}</td>
                <td>{dealer.mail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dealer;
