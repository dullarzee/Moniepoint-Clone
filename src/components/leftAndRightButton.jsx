import proptype from "prop-types";

LeftAndRightButton.propTypes = {
    bgColor: proptype.string,
    modifier: proptype.string,
};

export default function LeftAndRightButton({ bgColor, modifier }) {
    return (
        <>
            <div className={`${modifier}`}>
                <div className="flex gap-x-4 mt-[18%]">
                    <span
                        className={`${bgColor} flex items-center justify-center w-[3rem] h-[3rem] lg:w-[4.6rem] lg:h-[4.6rem] rounded-full`}
                    >
                        <svg
                            className="w-[1rem] h-[1rem] lg:w-[1.3rem] lg:h-[1.3rem] fill-blue-950"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                        >
                            <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
                        </svg>
                    </span>
                    <span
                        className={`${bgColor} flex items-center justify-center w-[3rem] h-[3rem] lg:w-[4.6rem] lg:h-[4.6rem] rounded-full`}
                    >
                        <svg
                            className="w-[1rem] h-[1rem] fill-blue-950"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                        >
                            <path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
                        </svg>
                    </span>
                </div>
            </div>
        </>
    );
}
