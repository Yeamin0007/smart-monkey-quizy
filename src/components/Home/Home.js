import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topics/Topic';

const Home = () => {
    const topics = useLoaderData();
    return (
        <div>
            <div>
                <Header></Header>

            </div>


        <div className='flex justify-center'>
        <div className='grid grid-cols-2 gap-28 w-1/2 m-20'>
        {
         topics.data.map(topic => <Topic
         key={topic.id}
         topic={topic}
         ></Topic>)
         }

        </div>
        </div>
        </div>
    );
};

export default Home;