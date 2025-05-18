import RegisterProgressWidget from "./registerProgressWidget";
import proptype from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import logo from "/images/moniepoint-seeklogo.svg";
import EmailInput from "./emailInput";
import emailjs from "@emailjs/browser";
import CloudErrorState from "./cloudErrorState";
import { useState } from "react";
import Supabase from "./mySupabase.js";

RegisterEmailStage.propTypes = {
    email: proptype.string,
    setEmail: proptype.func,
    error: proptype.string,
    setError: proptype.func,
    step: proptype.number,
    setStep: proptype.func,
    otpRef: proptype.string,
};

export default function RegisterEmailStage({
    email,
    setEmail,
    error,
    setError,
    step,
    setStep,
    otpRef,
}) {
    const [errorState, setErrorState] = useState(false);
    const [errorState0, setErrorState0] = useState(false);
    const navigate = useNavigate();
    const generateOtp = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };
    const handleNextStep = async (e) => {
        e.preventDefault();

        //checking if email is already registered
        try {
            const data = await Supabase.from("Moniepoint-clone-users-data")
                .select("*")
                .eq("email", email);
            if (data.data.length > 0) {
                setErrorState0(true);
                console.log("User already registered");
                return;
            }
        } catch (error) {
            console.log("error checking if user is already available:", error);
            setErrorState(true);
            return;
        }

        //Process of sending OTP email
        const otp = generateOtp();
        otpRef.current = otp;

        const templateParams = {
            email: email,
            passcode: otp,
        };

        emailjs
            .send(
                "service_it769k8",
                "template_0trcaoi",
                templateParams,
                "TPxhQrfopzurp7Isq"
            )
            .then((response) => {
                console.log("success:", response.status, response.text);
                setStep(2);
            })
            .catch((error) => {
                console.error("couldnt send otp:", error);
                setErrorState(true);
            });
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
                            <span className="block">
                                All deposits are insured by the
                                <span className="text-black font-bold">
                                    NDIC.
                                </span>
                            </span>
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
                        <h2 className="text-xl font-bold">
                            What&apos;s your Email Address?
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Enter your email address
                        </p>
                        <form onSubmit={handleNextStep} className="group">
                            <div className="my-5">
                                <EmailInput
                                    email={email}
                                    setEmail={setEmail}
                                    error={error}
                                    setError={setError}
                                />
                            </div>
                            <button
                                className={`w-full py-4 text-lg mt-[1.5rem] cursor-pointer rounded-sm bg-primaryBlue2 disabled:text-gray-500 disabled:bg-gray-200 disabled:cursor-not-allowed text-white transition-all duration-300`}
                                disabled={email.length < 1}
                            >
                                {" "}
                                Continue
                            </button>
                        </form>
                    </section>
                </div>
            </section>

            <section className="min-h-[100vh] bg-slate-100 font-inter sm:hidden">
                <div className="flex items-center pt-4 h-25">
                    <svg
                        onClick={() => navigate(-1)}
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
                    <h1 className="text-xl font-semibold">
                        What&apos;s your Email Address?
                    </h1>
                    <p className="text-sm my-3">Enter your email address</p>
                    <form onSubmit={handleNextStep} className="group">
                        <div className="rounded-lg bg-white p-4">
                            <EmailInput
                                email={email}
                                setEmail={setEmail}
                                error={error}
                                setError={setError}
                            />
                        </div>
                        <div className="mt-40">
                            <button
                                className={`w-full py-4 text-lg mt-[1.5rem] cursor-pointer rounded-sm bg-primaryBlue2 disabled:text-gray-500 disabled:bg-gray-200 disabled:cursor-not-allowed text-white transition-all duration-300`}
                                disabled={email.length < 1}
                            >
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            {errorState0 && (
                <CloudErrorState setErrorState={setErrorState0} error="warning">
                    User&apos;s email is already registered.Please login
                    instead.
                </CloudErrorState>
            )}
            {errorState && (
                <CloudErrorState setErrorState={setErrorState}>
                    Email couldn&apos;t be registered.Please check your internet
                    connection or try again later.
                </CloudErrorState>
            )}
        </>
    );
}
