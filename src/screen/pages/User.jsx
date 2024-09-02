import { useNavigate } from "react-router-dom";

function User() {
  const users = [
    {
      id: 1,
      name: "User Id 1",
      phone: "000-000-0000",
      mail: "@twitter",
      location: "place",
      amt: "$ 400"}
      ,
    {
      id: 2,
      name: "User Id 2",
      phone: "000-000-0000",
      mail: "@twitter",
      location: "place",
      amt: "$ 400"}
      ,
    {
      id: 3,
      name: "User Id 3",
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
              <th>User:</th>
              <th>Phone Number:</th>
              <th>Details:</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>
                  {user.name}
                </td>
                <td>{user.phone}</td>
                <td
                style={{fontWeight:"700",cursor:"pointer"}} 
                 onClick={() =>
                    navigate("/Userdetail", { state: { user } })
                  }>View</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
