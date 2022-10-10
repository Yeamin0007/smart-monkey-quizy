import React from 'react';
import { useActionData, useLoaderData } from 'react-router-dom';

const TopicDetails = () => {
    const quiz = useLoaderData();
    console.log(quiz.data)
    return (
        <div>
            <h2>hq</h2>
        </div>
    );
};

export default TopicDetails;