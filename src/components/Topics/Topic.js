import React from 'react';
import { Link } from 'react-router-dom';

import './Topic.css'

const Topic = ({topic}) => {
    const {name, logo, total, id } = topic;
    return (
        <div className='border-2 rounded bg-neutral-300'>
            <div>
            <img className='topic-img' src={logo} alt='logo'></img>
            </div>

            <div className='flex justify-between px-5 py-4 items-center bg-slate-100'>
                <div className='text-start font-bold'>
                <p className='text-sky-400 text-2xl'>{name}</p>
                <p>Total Questions: {total}</p>
                </div>

                <div>
                <Link to={`/${id}`}><button className='bg-sky-500 px-4 py-1 rounded text-white'>Start Quiz</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;