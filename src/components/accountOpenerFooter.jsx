import proptype from "prop-types";

AccountOpenerFooter.propTypes = {
    type: proptype.string,
};
export default function AccountOpenerFooter({ type }) {
    return (
        <>
            <div className="flex items-center justify-center h-[25rem] bg-blue-500 font-karla font-semibold">
                <div className="flex flex-col items-center gap-y-[4rem]">
                    <h2 className="text-3xl lg:text-4xl text-white lg:w-[70%] text-center mx-auto">
                        {type === "business"
                            ? "Enjoy a business solution designed to help you grow"
                            : "Experience banking that works"}
                    </h2>
                    <button
                        className="inline-flex gap-x-[0.8rem] items-center text-lg px-[1.5rem] py-[1rem]
                bg-slate-50 rounded-xl mx-auto cursor-pointer hover:scale-[0.9] transition-transform duration-300"
                    >
                        Open an Account
                        <svg
                            version="1.1"
                            className="fill-black w-[1.2rem] h-[1.2rem]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                        >
                            <path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}
