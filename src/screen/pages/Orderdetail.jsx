import { useLocation } from 'react-router-dom';

function Orderdetail() {
    const location = useLocation();
    const { order } = location.state || {};

    if (!order) {
        return <p>No order information available.</p>;
    }

    return (
        <div className="container-fluid" style={{flexDirection:"column"}}>
           <h3 style={{fontWeight:"bold"}}>order Details</h3>
            <p><strong>ID:</strong> {order.id}</p>
            <p><strong>Order:</strong> {order.name}</p>
            <p><strong>Phone:</strong> {order.phone}</p>
            <p><strong>Mail:</strong> {order.mail}</p>
            <p><strong>Location:</strong> {order.location}</p>
            <p><strong>Amount:</strong> {order.amt}</p>     
        </div>
    );
}

export default Orderdetail;
