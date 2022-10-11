import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizDetail = () => {
    const quizDetail = useLoaderData();
    const { name, questions } = quizDetail.data;
    return (
        <div className='mt-5 md:mt-10 md:px-10 lg:px-32'>
            <h1 className='text-5xl font-semibold mb-10'>Quiz of {name}</h1>
            <div className='grid lg:grid-cols-1 gap-5'>
                {
                    questions.map(question => <Questions key={question.id} questionProp={question}></Questions>)
                }
            </div>
        </div>
    );
};

export default QuizDetail;