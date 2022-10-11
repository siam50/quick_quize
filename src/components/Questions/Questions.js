import React from 'react';
import { BeakerIcon, EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';

const Questions = ({ questionProp }) => {
    const { correctAnswer, options, question } = questionProp;

    const handleAnsr = (option) => {
        if (option === correctAnswer) {
            toast.success('Your ansr correct', { autoClose: 1000 })
        }
        else {
            toast.warn('Your Answer Is Wrong', { autoClose: 1000 })
        }
    }

    const handleCorrectAnsr = () => {
        toast.info(`Correct Answer is: ${correctAnswer}`, { autoClose: 5000 })
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className=' flex justify-between'>
                        <h2 className="card-title">Question: {question}</h2>
                        <EyeIcon onClick={handleCorrectAnsr} className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="card-actions justify-center grid grid-cols-2 mt-3">
                        {
                            options.map(option => <button onClick={() => handleAnsr(option)} className="btn btn-success">{option}</button>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;