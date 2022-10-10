import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topics/Topic';

const Home = () => {
    const topics = useLoaderData();
    return (
        <div className='flex justify-center'>
            <div>

            </div>


        <div className='grid grid-cols-2 gap-28 w-1/2 m-20'>
        {
         topics.data.map(topic => <Topic
         key={topic.id}
         topic={topic}
         ></Topic>)
         }

        </div>
        </div>
    );
};

export default Home;