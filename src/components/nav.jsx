import React from 'react';
function NNav() {
    return (
      <div className='flex justify-between p-[30px]'>
        <div className=' logo text-lg text-[#00ff00] content-center'>Rogue-Dev</div>
        <div className='flex'>
          <div className="button">Home</div>
          <a className=' linkstyle' href='#about'><div className="button">About</div></a>
          <div className="button">Project</div>
        </div>
      </div>
    );
  }
  export default NNav;