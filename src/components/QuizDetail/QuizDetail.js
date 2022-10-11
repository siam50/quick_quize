import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizDetail = () => {
    const quizDetail = useLoaderData();
    const { name, questions } = quizDetail.data;
    return (
        <div className='mt-5 md:mt-10'>
            <h1 className='text-5xl font-semibold'>Quiz of {name}</h1>
            <div className='grid lg:grid-cols-2 gap-5'>
                {
                    questions.map(question => <Questions key={question.id} questionProp={question}></Questions>)
                }
            </div>
        </div>
    );
};

export default QuizDetail;