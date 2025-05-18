import { useState } from "react";
import proptype from "prop-types";
import logo from "/images/moniepoint-seeklogo.svg";
import PassCodeInput from "./passCodeInput";
import RegisterProgressWidget from "./registerProgressWidget";
import { Link } from "react-router-dom";
import Supabase from "./mySupabase";
import CloudErrorState from "./cloudErrorState";

RegisterPasscodeStage.propTypes = {
    step: proptype.number,
    setStep: proptype.func,
    email: proptype.string,
};

export default function RegisterPasscodeStage({ step, setStep, email }) {
    const [passCode, setPassCode] = useState("");
    const [error0, setError0] = useState(false);
    const mod = "oklch(0.929 0.013 255.508)";

    const handleNextStep = async (e) => {
        e.preventDefault();

        try {
            const { data } = await Supabase.from(
                "Moniepoint-clone-users-data"
            ).insert([{ email: email, passcode: passCode }]);
            console.log(data);
            setStep(4);
        } catch (error) {
            setError0(true);
            console.log("error creating account:", error);
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
                        <h2 className="text-xl font-bold">
                            Setup your Passcode
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Enter your 6 digit passcode
                        </p>
                        <form onSubmit={handleNextStep} className="group">
                            <div className="my-5">
                                <PassCodeInput
                                    setPassCode={setPassCode}
                                    mod={mod}
                                />
                            </div>
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
                <div className="flex justify-between items-center pt-0 h-25 px-3">
                    <svg
                        onClick={() => setStep(step - 1)}
                        version="1.1"
                        className="rotate-90 w-9 h-10 fill-primaryBlue2 cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                    </svg>
                    <span className="inline-block text-primaryBlue2 bg-blue-200 rounded-sm px-2 py-0.5">{`${email.slice(
                        0,
                        5
                    )}***${email.slice(email.length - 9)}`}</span>
                </div>
                <div className="p-4">
                    <h1 className="text-xl font-semibold text-center">
                        Setup your Passcode
                    </h1>
                    <p className="text-sm my-3 text-center">
                        Enter a 6 digit passcode.
                    </p>
                    <form onSubmit={handleNextStep} className="group">
                        <div className="rounded-lg bg-white p-4">
                            <PassCodeInput
                                setPassCode={setPassCode}
                                mod={mod}
                                border={false}
                            />
                        </div>
                        <div className="mt-40">
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
            {error0 && (
                <CloudErrorState error="cloud">
                    Error creating account! Please try again later.
                </CloudErrorState>
            )}
        </>
    );
}
