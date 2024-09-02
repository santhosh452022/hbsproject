import { useNavigate } from "react-router-dom";

function Payment() {
  const payments = [
    {
      id: 1,
      name: "Payment 1",
      phone: "000-000-0000",
      mail: "@twitter",
      location: "place",
      amt: "$ 400"}
      ,
    {
      id: 2,
      name: "Payment 2",
      phone: "000-000-0000",
      mail: "@twitter",
      location: "place",
      amt: "$ 400"}
      ,
    {
      id: 3,
      name: "Payment 3",
      phone: "000-000-0000",
      mail: "@twitter",
      location: "place",
      amt: "$ 400"}
      ,
  ];

  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="card-box">
        <table className="table">
          <thead>
            <tr>
              <th>No:</th>
              <th>payment:</th>
              <th>Phone Number:</th>
              <th>Details:</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <th scope="row">{payment.id}</th>
                <td>
                  {payment.name}
                </td>
                <td>{payment.phone}</td>
                <td
                style={{fontWeight:"700",cursor:"pointer"}} 
                 onClick={() =>
                    navigate("/Paymentdetail", { state: { payment } })
                  }>View</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Payment;
