import { useLocation } from 'react-router-dom';

function Paymentdetail() {
    const location = useLocation();
    const { payment } = location.state || {};

    if (!payment) {
        return <p>No payment information available.</p>;
    }

    return (
        <div className="container-fluid" style={{flexDirection:"column"}}>
           <h3 style={{fontWeight:"bold"}}>payment Details</h3>
            <p><strong>ID:</strong> {payment.id}</p>
            <p><strong>Payment:</strong> {payment.name}</p>
            <p><strong>Phone:</strong> {payment.phone}</p>
            <p><strong>Mail:</strong> {payment.mail}</p>
            <p><strong>Location:</strong> {payment.location}</p>
            <p><strong>Amount:</strong> {payment.amt}</p>     
        </div>
    );
}

export default Paymentdetail;
