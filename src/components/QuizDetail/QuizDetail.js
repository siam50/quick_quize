import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetail = () => {
    const quizDetail = useLoaderData();
    console.log(quizDetail)
    return (
        <div>
            <h1>quiz detail</h1>
        </div>
    );
};

export default QuizDetail;