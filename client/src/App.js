import React from 'react';
import axios from 'axios';
import {saveAs} from 'file-saver';
import './App.css';

function App() {
  let baseURL = '';
  console.log('Current hostname:', window.location.hostname);
  if (window.location.hostname!== 'localhost') {
    baseURL = 'http://localhost:5000';
  } else {
    baseURL = 'https://pdf-generator-backend.vercel.app';
  }
  
    const [formData, setFormData] = React.useState({
    name: '',
    reciptId: 0,
    price1: 0,
    price2: 0
  });
  const handleChange = ({target:{name, value}}) => {
    
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  
  
  };
const createAndDownPDF = () => {
  console.log('server url:', baseURL);
    axios.post( baseURL+'/create-pdf', formData).then(() => axios.get(baseURL+'/fetch-pdf', { responseType: 'blob' }))
      .then((response) => {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        saveAs(blob, 'receipt.pdf');
      })
      .catch((error) => {
        console.error('Error downloading PDF:', error);
      });
     
  };


  return (
    <div className="App" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)'
    }}>
      <div style={{
        background: '#fff',
        padding: '2.5rem 2rem',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        minWidth: '340px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem'
      }}>
        <h2 style={{
          margin: 0,
          fontWeight: 700,
          fontSize: '1.5rem',
          color: '#22223b',
          textAlign: 'center',
          letterSpacing: '0.02em'
        }}>PDF Receipt Generator</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          style={{
            padding: '0.7rem 1rem',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            fontSize: '1rem',
            outline: 'none',
            transition: 'border 0.2s',
            marginBottom: 0
          }}
        />
        <input
          type="number"
          placeholder="Receipt ID"
          name="reciptId"
          onChange={handleChange}
          style={{
            padding: '0.7rem 1rem',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            fontSize: '1rem',
            outline: 'none',
            transition: 'border 0.2s',
            marginBottom: 0
          }}
        />
        <input
          type="number"
          placeholder="Price 1"
          name="price1"
          onChange={handleChange}
          style={{
            padding: '0.7rem 1rem',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            fontSize: '1rem',
            outline: 'none',
            transition: 'border 0.2s',
            marginBottom: 0
          }}
        />
        <input
          type="text"
          placeholder="Price 2"
          name="price2"
          onChange={handleChange}
          style={{
            padding: '0.7rem 1rem',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            fontSize: '1rem',
            outline: 'none',
            transition: 'border 0.2s',
            marginBottom: 0
          }}
        />
        <button
          onClick={createAndDownPDF}
          style={{
            marginTop: '0.5rem',
            padding: '0.8rem 0',
            borderRadius: '8px',
            border: 'none',
            background: 'linear-gradient(90deg, #4f8cff 0%, #38b6ff 100%)',
            color: '#fff',
            fontWeight: 600,
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(79,140,255,0.08)',
            transition: 'background 0.2s'
          }}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default App;
