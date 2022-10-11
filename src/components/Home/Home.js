import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quizes from '../Quizes/Quizes';
import './Home.css';
import cover from '../../images/quiz.jpg';

const Home = () => {
    const allQuiz = useLoaderData();
    const { data } = allQuiz;
    return (
        <div>
            <div className='header mb-10 lg:px-12'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={cover} alt="Movie" /></figure>
                    <div className="card-body grid justify-items-center lg:self-center">
                        <h2 className="card-title">Welcome To Our Website!</h2>
                        <p>“I exclusively attended public school… And I can honestly say that on the day of my graduation, if you had given me a pop quiz on history, science, or math, I would have in no way been able to pass it – despite the fact that I completely understood it at the time that it had been ‘taught’ to me, and had even made a good ‘grade’ on it.” ~ <span className='font-bold'>Jessica Bowman</span></p>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {
                    data.map(quiz => <Quizes key={quiz.id} quiz={quiz}></Quizes>)
                }
            </div>
        </div>
    );
};

export default Home;