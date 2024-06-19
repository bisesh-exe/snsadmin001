import React from 'react';
import Navbar from './Navbar';

function Userpage() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid p-0 h-100">
        <div className="bg-image h-100" style={{ backgroundImage: `url(${"https://inquesta.co.uk/wp-content/uploads/Increase-in-Corporation-Tax-coins-rising-FEATURE-.jpg"})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.5, height: '100vh' }}>
          <div className="text-center text-white pt-5">
            <h1 className="display-4">Welcome ABC to SNS admin page</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userpage;