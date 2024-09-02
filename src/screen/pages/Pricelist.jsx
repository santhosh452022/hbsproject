import { useNavigate } from "react-router-dom";

function Pricelist() {
  const Pricelists = [
    {
      id: 1,
      name: "Scrap 1",
      price: "$ 400",
      update: "updates",
    }
      ,
    {
      id: 2,
      name: "Scrap 2",
      price: "$ 400",
      update: "updates",
    }
      ,
    {
      id: 3,
      name: "Scrap 3",
      price: "$ 400",
      update: "updates",
    }
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
              <th>Name:</th>
              <th>Price:</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {Pricelists.map((Pricelist) => (
              <tr key={Pricelist.id}>
                <th scope="row">{Pricelist.id}</th>
                <td>
                  {Pricelist.name}
                </td>
                <td>{Pricelist.price}</td>
                <td>{Pricelist.update}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Pricelist;
