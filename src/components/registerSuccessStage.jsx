import { Link } from "react-router-dom";
import logo from "/images/moniepoint-seeklogo.svg";
import proptype from "prop-types";

RegisterSuccessStage.propTypes = {
    step: proptype.number,
};

export default function RegisterSuccessStage() {
    return (
        <>
            <section>
                <section className="sm:grid md:grid-rows-2 lg:grid-rows-none lg:grid-cols-2 min-h-[100vh] font-inter">
                    <div className="bg-gray-100 p-4 sm:pb-[13%] lg:pb-0 hidden md:block">
                        <div className="md:flex lg:hidden justify-between">
                            <img alt="logo" className="h-12" src={logo}></img>
                            <div className="flex justify-end items-center gap-3">
                                <span className="">
                                    Already have an account?
                                </span>
                                <Link to="/login">
                                    <button className="py-3 px-7 rounded-md bg-blue-100 text-primaryBlue2">
                                        Login
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="px-[15%] pt-[12.5%]">
                            <h1 className="text-5xl font-bold leading-[130%]">
                                <div>Welcome</div> to Moniepoint!
                            </h1>
                            <p className="text-lg font-medium text-black/80 py-5">
                                Collect payments, access loans and manage
                                operations with a business banking solution that
                                meets all your needs.
                            </p>
                            <p className="text-gray-400 text-sm mt-[13%]">
                                Moniepoint MFB is licensed by the{" "}
                                <span className="text-black font-bold">
                                    Central Bank of Nigeria.
                                </span>
                                <div>
                                    All deposits are insured by the
                                    <span className="text-black font-bold">
                                        NDIC.
                                    </span>
                                </div>
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-100 min-h-[100vh] border border-transparent">
                        <svg
                            className="relative w-28 h-28 mx-auto mt-[15%]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 80 80"
                        >
                            <g fill="none">
                                <circle
                                    cx="40"
                                    cy="40"
                                    r="40"
                                    className="fill-primaryBlue2"
                                />
                                <path
                                    className="fill-blue-600"
                                    d="M48.464 79.167c.768-.15 1.53-.321 2.288-.515a40.04 40.04 0 0 0 3.794-1.266 40.043 40.043 0 0 0 3.657-1.63 40.046 40.046 0 0 0 12.463-9.898A40.063 40.063 0 0 0 78.3 51.89c.338-1.117.627-2.249.867-3.391L55.374 24.698a21.6 21.6 0 0 0-15.332-6.365 21.629 21.629 0 0 0-15.344 6.365c-8.486 8.489-8.486 22.205 0 30.694l23.766 23.775Z"
                                />
                                <path
                                    fill="#FFF"
                                    d="M40.003 18.333a21.58 21.58 0 0 1 15.31 6.351c8.471 8.471 8.471 22.158 0 30.63-8.47 8.47-22.156 8.47-30.627 0-8.47-8.472-8.47-22.159 0-30.63a21.594 21.594 0 0 1 15.317-6.35Zm9.865 15c-.316.028-.622.15-.872.344l-12.168 9.13-5.641-5.642c-1.224-1.275-3.63 1.132-2.356 2.356l6.663 6.663c.56.56 1.539.63 2.173.156l13.326-9.995c1.122-.816.43-2.993-.956-3.013a1.666 1.666 0 0 0-.17 0Z"
                                />
                            </g>
                        </svg>
                        <h2 className="text-3xl text-center my-8 text-slate-600 font-normal">
                            Thank you!
                        </h2>
                        <p className="text-center px-4 md:px-[16%] text-slate-500 mb-15">
                            Thank you for opening an account with Moniepoint!
                            You can now login to your dashboard.
                        </p>

                        <Link to="/login">
                            <button className="block my-3 px-7 py-2 text-xl cursor-pointer bg-blue-500 mx-auto text-white rounded-md">
                                Back to Login
                            </button>
                        </Link>
                    </div>
                </section>
            </section>
        </>
    );
}
