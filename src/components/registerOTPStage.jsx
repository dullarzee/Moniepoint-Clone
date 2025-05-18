import { useState } from "react";
import logo from "/images/moniepoint-seeklogo.svg";
import PassCodeInput from "./passCodeInput";
import ResendOTP from "./resendOTP";
import RegisterProgressWidget from "./registerProgressWidget";
import proptype from "prop-types";
import { Link } from "react-router-dom";
import CloudErrorState from "./cloudErrorState";

RegisterOTPStage.propTypes = {
    step: proptype.number,
    setStep: proptype.func,
    otpRef: proptype.string,
    email: proptype.string,
};

export default function RegisterOTPStage({ step, setStep, otpRef, email }) {
    const [passCode, setPassCode] = useState("");
    const [errorState1, setErrorState1] = useState(false);
    const [errorState2, setErrorState2] = useState(false);

    const mod = "oklch(0.929 0.013 255.508)";

    const handleNextStep = (e) => {
        e.preventDefault();
        if (otpRef.current === passCode) {
            setStep(3);
            console.log("correct OTP inputted!");
        } else {
            setErrorState1(true);
        }
    };

    return (
        <>
            <section className="hidden sm:grid md:grid-rows-2 lg:grid-rows-none lg:grid-cols-2 min-h-[100vh] font-inter">
                <div className="bg-gray-100 p-4 sm:pb-[13%] lg:pb-0">
                    <div className="md:flex lg:hidden justify-between">
                        <img alt="logo" className="h-12" src={logo}></img>
                        <div className="flex justify-end items-center gap-3">
                            <span className="">Already have an account?</span>
                            <Link to="/login">
                                <button className="py-3 px-7 rounded-md bg-blue-100 text-primaryBlue2">
                                    Login
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="px-[15%] pt-[12.5%]">
                        <h1 className="text-5xl font-bold leading-[130%]">
                            Setup a Profile
                        </h1>
                        <p className="text-lg font-medium text-black/80 py-5">
                            Follow the steps below to get started with us
                        </p>
                        <RegisterProgressWidget step={step} />
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
                <div className="bg-gray-100 p-4">
                    <div className="hidden lg:flex justify-end items-center gap-3">
                        <span className="">Already have an account?</span>
                        <Link to="/login">
                            <button className="cursor-pointer py-3 px-7 rounded-md bg-blue-100 text-primaryBlue2">
                                Login
                            </button>
                        </Link>
                    </div>

                    <section className="relative sm:top-[-10%] lg:top-[10%] lg:left-[-10%] sm:mx-auto lg:mx-0 bg-white w-[35rem] max-w-[37rem] rounded-xl p-[6%]">
                        <h2 className="text-xl font-bold">Verify your email</h2>
                        <p className="text-gray-500 text-sm">
                            We&apos;ve just sent you a 6 digit code via email
                            Check your Inbox and enter it here.
                        </p>
                        <form onSubmit={handleNextStep} className="group">
                            <div className="my-5">
                                <PassCodeInput
                                    setPassCode={setPassCode}
                                    mod={mod}
                                    border={false}
                                />
                            </div>
                            <ResendOTP
                                otpRef={otpRef}
                                email={email}
                                setErrorState={setErrorState2}
                            />
                            <button
                                className={`w-full py-4 text-lg mt-[1.5rem] rounded-sm group-has-[:disabled]:bg-gray-200 
                                                                    group-has-[:disabled]:text-gray-500 group-not-has-[:disabled]:bg-primaryBlue2 
                                                                    group-not-has-[:disabled]:text-white transition-all duration-300`}
                                disabled={passCode.length < 6}
                            >
                                Continue
                            </button>
                        </form>
                    </section>
                </div>
            </section>

            <section className="min-h-[100vh] bg-slate-100 font-inter sm:hidden">
                <div className="flex items-center pt-4 h-25">
                    <svg
                        onClick={() => setStep(step - 1)}
                        version="1.1"
                        className="rotate-90 w-9 h-10 fill-primaryBlue2 cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                    </svg>
                </div>
                {/*progress bar*/}
                <div className="bg-blue-200">
                    <div
                        className="bg-primaryBlue2 h-[3px] rounded-full"
                        style={{ width: `${18 * step}%` }}
                    ></div>
                </div>
                <div className="p-4">
                    <h1 className="text-xl font-semibold">Verify your Email</h1>
                    <p className="text-sm my-3">
                        We&apos;ve just sent you a 6 digit code via Email. Check
                        your Inbox and enter it here.
                    </p>
                    <form onSubmit={handleNextStep} className="group">
                        <div className="rounded-lg bg-white p-4">
                            <PassCodeInput
                                setPassCode={setPassCode}
                                mod={mod}
                                border={false}
                            />
                            <div className="mt-5">
                                <ResendOTP
                                    otpRef={otpRef}
                                    email={email}
                                    setErrorState={setErrorState2}
                                />
                            </div>
                        </div>
                        <div className="mt-30">
                            <button
                                className={`w-full py-4 text-md mt-[1.5rem] rounded-sm group-has-[:disabled]:bg-gray-200 
                                                                        group-has-[:disabled]:text-gray-500 group-not-has-[:disabled]:bg-primaryBlue2 
                                                                        group-not-has-[:disabled]:text-white transition-all duration-300`}
                                disabled={passCode.length < 6}
                            >
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            {errorState1 && (
                <CloudErrorState
                    errorState={errorState1}
                    setErrorState={setErrorState1}
                    error="warning"
                >
                    OTP entered is incorrect! Please enter the correct OTP.
                </CloudErrorState>
            )}
            {errorState2 && (
                <CloudErrorState
                    errorState={errorState2}
                    setErrorState={setErrorState2}
                >
                    Couldn&apos;t resend code.Please try again later.
                </CloudErrorState>
            )}
        </>
    );
}
