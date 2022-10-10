import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizDetail = () => {
    const quizDetail = useLoaderData();
    const { name, questions } = quizDetail.data;
    return (
        <div>
            <h1>Quiz of {name}</h1>
            <div className='grid grid-cols-2 gap-5'>
                {
                    questions.map(question => <Questions key={question.id} questionProp={question}></Questions>)
                }
            </div>
        </div>
    );
};

export default QuizDetail;