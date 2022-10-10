import React from 'react';
import { Link } from 'react-router-dom';

const Quizes = ({ quiz }) => {
    const { logo, name, total, id } = quiz;

    return (
        <div className="card w-96 bg-stone-600 shadow-xl image-full">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Total Question: {total}</p>
                <div className="card-actions justify-center">
                    <Link to={`/quiz/${id}`}><button className="btn btn-primary">Start Quiz</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Quizes;