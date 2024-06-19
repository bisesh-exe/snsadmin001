import React from 'react';
import Navbar from './Navbar';

function Userpage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container-fluid p-0 flex-grow-1">
        <div className="bg-image" style={{
          backgroundImage: `url("https://inquesta.co.uk/wp-content/uploads/Increase-in-Corporation-Tax-coins-rising-FEATURE-.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}></div>
          <div className="d-flex flex-column justify-content-center align-items-center text-white" style={{ position: 'relative', zIndex: 2 }}>
            <h1 className="display-4 mb-4 text-center">Welcome SNS Staff to SNS admin page</h1>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary btn-lg mx-2" style={{ minWidth: '200px' }}>My Profile</button>
              <button className="btn btn-danger btn-lg mx-2" to='/'style={{ minWidth: '200px' }}>Logout</button>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Userpage;
