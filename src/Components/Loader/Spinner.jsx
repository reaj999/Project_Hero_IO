import React from 'react';
import logo from '../../assets/logo.png';

const Loading = () => (
  <div className="min-h-screen flex justify-center items-center">
    <div className="">
        <img src={logo} alt=""  className='rounded-full animate-spin w-16 h-16'/>
    </div>
  </div>
);

export default Loading;
