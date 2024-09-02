 
import React, { useState } from 'react';
 
const Notification = () => {
    const [message, setMessage] = useState('');
    const [selectAllUsers, setSelectAllUsers] = useState(false);
    const [selectAllDealers, setSelectAllDealers] = useState(false);
    const [specificUserIds, setSpecificUserIds] = useState('');
    const [specificDealerIds, setSpecificDealerIds] = useState('');
 
 
    const users = [
        { id: 'user1', name: 'User 1' },
        { id: 'user2', name: 'User 2' },
        { id: 'user3', name: 'User 3' }
    ];
 
    const dealers = [
        { id: 'dealer1', name: 'Dealer 1' },
        { id: 'dealer2', name: 'Dealer 2' },
        { id: 'dealer3', name: 'Dealer 3' }
    ];
 
    const handleSend = () => {
      
        const selectedUsers = selectAllUsers
            ? users.map(user => user.id)
            : specificUserIds.split(',').map(id => id.trim()).filter(id => id);
       
        const selectedDealers = selectAllDealers
            ? dealers.map(dealer => dealer.id)
            : specificDealerIds.split(',').map(id => id.trim()).filter(id => id);
 
        console.log('Message:', message);
        console.log('Selected Users:', selectedUsers);
        console.log('Selected Dealers:', selectedDealers);
        
    };
 
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Send Notifications</h1>
           
            <div style={styles.formGroup}>
                <label htmlFor="message" style={styles.label}>Message</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                    style={styles.textarea}
                />
            </div>
 
            <div style={styles.formGroup}>
                <label style={styles.label}>
                    <input
                        type="checkbox"
                        checked={selectAllUsers}
                        onChange={() => setSelectAllUsers(!selectAllUsers)}
                        style={styles.checkbox}
                    />
                   All Users
                </label>
            </div>
 
            <div style={styles.formGroup}>
                <label style={styles.label}>
                    <input
                        type="checkbox"
                        checked={selectAllDealers}
                        onChange={() => setSelectAllDealers(!selectAllDealers)}
                        style={styles.checkbox}
                    />
                   All Dealers
                </label>
            </div>
 
            <div style={styles.formGroup}>
                <label htmlFor="specificUsers" style={styles.label}>Specific User IDs </label>
                <input
                    id="specificUsers"
                    type="text"
                    value={specificUserIds}
                    onChange={(e) => setSpecificUserIds(e.target.value)}
                    placeholder="user1,user2"
                    style={styles.input}
                />
            </div>
 
            <div style={styles.formGroup}>
                <label htmlFor="specificDealers" style={styles.label}>Specific Dealer IDs </label>
                <input
                    id="specificDealers"
                    type="text"
                    value={specificDealerIds}
                    onChange={(e) => setSpecificDealerIds(e.target.value)}
                    placeholder="dealer1,dealer2"
                    style={styles.input}
                />
            </div>
 
            <button onClick={handleSend} style={styles.button}>Send</button>
        </div>
    );
};
 
 
const styles = {
    container: {
        padding: '20px',
        margin: 'auto'
    },
    header: {
        fontSize: '24px',
        marginBottom: '20px'
    },
    formGroup: {
        marginBottom: '20px'
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold'
    },
    textarea: {
        width: '100%',
        height: '100px',
        padding: '10px',
        boxSizing: 'border-box',
        border: '1px solid #ccc',
        borderRadius: '4px'
    },
    checkboxGroup: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    checkbox: {
        marginRight: '5px'
    },
    input: {
        width: '100%',
        padding: '10px',
        boxSizing: 'border-box',
        border: '1px solid #ccc',
        borderRadius: '4px'
    },
    button: {
        padding: '10px 50px',
        backgroundColor: '#777',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '4px'
    }
};
 
export default Notification;