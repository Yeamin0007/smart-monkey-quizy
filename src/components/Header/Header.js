import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-center items-center my-28'>
        



            
            <div className= 'lg:text-6xl sm:text-sm md:text-lg '>
            <img className='md:px-60 sm:px-12' src='https://smartmonkey.ca/wp-content/uploads/2020/11/Smart-Monkey-Logo-v2-square.png' alt='smart-monkey'></img>

                <h1>
                    <span className='text-amber-500'>Time to surpress your own limit,</span> right here, right now.
                </h1>
                <p className='text-3xl mt-4'>How much you know about coding? <span className='text-amber-500'>Test yourself here with us.</span></p>

            </div>
        

            
            </div>
    );
};

export default Header;