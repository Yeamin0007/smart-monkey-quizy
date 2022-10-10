import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='h-12 flex md-flex items-center justify-around bg-green-200 '>
           <div>
            <h1 className='text-3xl'>Smart-Monkey</h1>
           </div>
           
           <div className=''>
             <Link to='/' className='px-4'>Topics</Link>
             <Link to='/statistics' className='px-4'>Statistics</Link>
             <Link to='/blog' className='px-4'>Blog</Link>
           </div> 
        </nav>
    );
};

export default Navbar;