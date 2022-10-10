import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quizes from '../Quizes/Quizes';
import './Home.css';

const Home = () => {
    const allQuiz = useLoaderData();
    const { data } = allQuiz;
    return (
        <div>
            <div className='header'>
                <h1 className='text-white text-4xl font-semibold'>Are You Ready</h1>
                <h1 className='text-white text-4xl font-semibold'>For</h1>
                <h1 className='text-white text-4xl font-semibold'>Quiz??</h1>
            </div>
            <div>
                {
                    data.map(quiz => <Quizes key={quiz.id} quiz={quiz}></Quizes>)
                }
            </div>
        </div>
    );
};

export default Home;