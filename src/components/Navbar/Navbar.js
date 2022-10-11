import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='h-16 flex md-flex items-center justify-around bg-stone-800 '>
           <div>
            <h1 className='md:text-3xl sm:text-base text-orange-500'>Smart-Monkey-Quizy</h1>
           </div>
           
           <div className='text-sm text-white'>
             <Link to='/' className='px-4  hover:text-orange-500'>Topics</Link>
             <Link to='/statistics' className='px-4  hover:text-orange-500'>Statistics</Link>
             <Link to='/blog' className='px-4  hover:text-orange-500'>Blog</Link>
           </div> 
        </nav>
    );
};

export default Navbar;