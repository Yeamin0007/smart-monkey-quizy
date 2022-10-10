import React from 'react';
import { Link } from 'react-router-dom';

import './Topic.css'

const Topic = ({topic}) => {
    const {name, logo, total, id } = topic;
    return (
        <div className='border-2 rounded bg-slate-400'>
            <div>
            <img className='topic-img' src={logo}></img>
            </div>

            <div className='flex justify-around items-center bg-slate-100 rounded'>
                <div className='text-start'>
                <p>{name}</p>
                <p>Total Questions: {total}</p>
                </div>

                <div>
                <Link to={`/${id}`}><button className='bg-blue-500 px-4 py-2 rounded text-white'>Start Quiz</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;