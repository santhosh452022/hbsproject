import { useNavigate } from "react-router-dom";

function Order() {
  const orders = [
    {
      id: 1,
      name: "Order Id 1",
      phone: "000-000-0000",
      mail: "@twitter",
      location: "place",
      amt: "$ 600"}
      ,
    {
      id: 2,
      name: "Order Id 2",
      phone: "000-000-0000",
      mail: "@twitter",
      location: "place",
      amt: "$ 600"}
      ,
    {
      id: 3,
      name: "Order Id 3",
      phone: "000-000-0000",
      mail: "@twitter",
      location: "place",
      amt: "$ 600"}
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
              <th>Order:</th>
              <th>Phone Number:</th>
              <th>Details:</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <th scope="row">{order.id}</th>
                <td>
                  {order.name}
                </td>
                <td>{order.phone}</td>
                <td
                style={{fontWeight:"700",cursor:"pointer"}} 
                 onClick={() =>
                    navigate("/Orderdetail", { state: { order } })
                  }>View</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Order;
