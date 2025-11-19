import React from "react";

import Sidebar from '../components/Student/Sidebar';
import Navbar from '../components/Student/Navbar';
import Display from './Display'
function Cou() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-y-auto">
          <Display />
        </div>
      </div>
    </div>
  );
}

export default Cou;
