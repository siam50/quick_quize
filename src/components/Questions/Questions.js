import React from 'react';

const Questions = ({ questionProp }) => {
    const { correctAnswer, options, question } = questionProp;

    const handleAnsr = (option) => {
        if (option === correctAnswer) {
            alert('correct ans')
        }
        else {
            alert('wrong ansr')
        }
        console.log(option)
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Question: {question}</h2>
                    <div className="card-actions justify-center grid grid-cols-2 mt-3">
                        {
                            options.map(option => <button onClick={() => handleAnsr(option)} className="btn btn-success checkbox-accent">{option}</button>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;