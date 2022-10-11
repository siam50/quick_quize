import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';

const QuizPage = () => {
    const allQuiz = useLoaderData();
    const { data } = allQuiz;
    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {
                    data.map(quiz => <Quizes key={quiz.id} quiz={quiz}></Quizes>)
                }
            </div>
        </div>
    );
};

export default QuizPage;