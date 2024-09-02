import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
 
const Report = () => {
    const [reportType, setReportType] = useState('daily');
    const [selectedPayment, setSelectedPayment] = useState(null);
 
    const reports = {
        daily: [
            { date: '25-08-2024', amount: '$200' },
           
        ],
        weekly: [
            { week: '19-08-2024 to 25-08-2024', amount: '$1400' },
         
        ],
        monthly: [
            { month: 'August 2024', amount: '$6000' },
          
        ],
    };
 
    const pendingPayments = [
        { id: '1', date: '20-08-2024', amount: '$300', details: 'Invoice #1234' },
        { id: '2', date: '21-08-2024', amount: '$700', details: 'Invoice #1234' },
 
    ];
 
    const handleViewDetails = (id) => {
        const payment = pendingPayments.find(p => p.id === id);
        setSelectedPayment(payment);
    };
 
    return (
        <div>
            <div className="">
                <h2>Earnings Report</h2>
                <div className="mt-4">
                    <Button onClick={() => setReportType('daily')} style={{backgroundColor:"rgb(168, 170, 171)",color:"#fff",borderWidth:"0",padding:"5px 40px",borderRadius:"5px"}}>Daily Report</Button>
                    <Button onClick={() => setReportType('weekly')} className="ms-2" style={{backgroundColor:"rgb(168, 170, 171)",color:"#fff",borderWidth:"0",padding:"5px 40px",borderRadius:"5px"}}>Weekly Report</Button>
                    <Button onClick={() => setReportType('monthly')} className="ms-2" style={{backgroundColor:"rgb(168, 170, 171)",color:"#fff",borderWidth:"0",padding:"5px 40px",borderRadius:"5px"}}>Monthly Report</Button>
                </div>
                <Table striped bordered hover className='mt-4'>
                    <thead>
                        <tr>
                            <th>{reportType === 'daily' ? 'Date' : reportType === 'weekly' ? 'Week' : 'Month'}</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports[reportType].map((report, index) => (
                            <tr key={index}>
                                <td>{report.date || report.week || report.month}</td>
                                <td>{report.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
 
  
            <div className="mb-3 mt-5">
                <h2>Pending Payments</h2>
                <Table striped bordered hover className='mt-3'>
                    <thead>
                        <tr>
                            <th className='text-center'>Date</th>
                            <th className='text-center'>Amount</th>
                            <th className='text-center'>Details</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pendingPayments.map((payment) => (
                            <tr key={payment.id}>
                                <td className='text-center'>{payment.date}</td>
                                <td className='text-center'>{payment.amount}</td>
                                <td className='text-center'>{payment.details}</td>
                                <td className='text-center'>
                                    <Button style={{backgroundColor:"rgb(168, 170, 171)",color:"#fff",borderWidth:"0",padding:"5px 40px",borderRadius:"5px"}} onClick={() => handleViewDetails(payment.id)}>View</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
 
            
                {selectedPayment && (
                    <div className="modal" style={{ display: 'block' }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Payment Details</h5>
                                    <Button type="button" className="btn-close" onClick={() => setSelectedPayment(null)}></Button>
                                </div>
                                <div className="modal-body">
                                    <p><strong>Date:</strong> {selectedPayment.date}</p>
                                    <p><strong>Amount:</strong> {selectedPayment.amount}</p>
                                    <p><strong>Details:</strong> {selectedPayment.details}</p>
                                </div>
                                <div className="modal-footer">
                                    <Button variant="secondary" onClick={() => setSelectedPayment(null)} style={{backgroundColor:"rgb(168, 170, 171)"}}>Close</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
 
export default Report;