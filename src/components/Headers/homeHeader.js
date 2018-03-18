import React from 'react'

const HomeHeader = () => {
  return (
    <div className='row home-header'>
      <div className='col-sm-4'>
        <h4 className='logo'>Task Scheduler</h4>
      </div>
      <div className='col-sm-8'>
        <ul className='header-menu'>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default HomeHeader;
