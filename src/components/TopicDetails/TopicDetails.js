import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Questions/Question';


const TopicDetails = () => {
    const topicQuiz = useLoaderData();
    const { data } = topicQuiz;
    const { questions } = data;
    return (
        <div className=' bg-teal-200 lg:mx-44 lg:my-20'>
            <h1 className='text-4xl font-semibold py-3 text-neutral-800'>Quiz of {data.name}</h1>

            <div>
                <div>
                    {
                        questions.map(topicQuestion => <Question
                              key={topicQuestion.id}
                            topicQuestion={topicQuestion}>

                        </Question>)
                        
                    }
                </div>
            </div>
        </div>
    );
};

export default TopicDetails;