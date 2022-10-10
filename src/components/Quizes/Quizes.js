import React from 'react';

const Quizes = ({ quiz, handleQuiz }) => {
    const { logo, name, total, id } = quiz;

    return (
        <div className="card w-96 bg-stone-600 shadow-xl image-full">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Total Question: {total}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleQuiz(id)} className="btn btn-primary">Start Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default Quizes;