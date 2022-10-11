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
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-28 sm:w-auto md:w-1/2 m-20 '>
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