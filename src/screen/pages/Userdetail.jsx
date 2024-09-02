import { useLocation } from 'react-router-dom';

function Userdetail() {
    const location = useLocation();
    const { user } = location.state || {};

    if (!user) {
        return <p>No user information available.</p>;
    }

    return (
        <div className="container-fluid" style={{flexDirection:"column"}}>
           <h3 style={{fontWeight:"bold"}}>user Details</h3>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Order:</strong> {user.name}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Mail:</strong> {user.mail}</p>
            <p><strong>Location:</strong> {user.location}</p>
            <p><strong>Amount:</strong> {user.amt}</p>     
        </div>
    );
}

export default Userdetail;
