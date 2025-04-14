import { useState } from "react";
import proptype from "prop-types";

FaqItem.propTypes = {
    children: proptype.object,
    question: proptype.string,
};

export default function FaqItem({ children, question }) {
    const [showAnswer, setShowAnswer] = useState(false);
    const handleToggle = () => {
        setShowAnswer(!showAnswer);
    };
    return (
        <>
            <div
                onClick={handleToggle}
                className="flex flex-col cursor-pointer font-red w-[90%] lg:w-[50%] shrink-0 bg-white py-[0.7rem] lg:py-[1.5rem] mx-auto rounded-lg px-[0.7rem] lg:px-[2.5rem]"
            >
                <div className="flex justify-between items-center">
                    <span className="md:text-xl text-blue-950 font-semibold">
                        {question}
                    </span>
                    <span className="px-[0.5rem] py-[0.5rem] bg-slate-50 rounded-full">
                        <svg
                            className="w-[1.5rem] h-[1.5rem] fill-blue-500 "
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                        </svg>
                    </span>
                </div>
                {showAnswer && (
                    <p className="w-[96%] text-sm lg:text-base">{children}</p>
                )}
            </div>
        </>
    );
}
