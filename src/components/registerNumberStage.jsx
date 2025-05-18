import { useRef } from "react";
import logo from "/images/moniepoint-seeklogo.svg";
import PhoneNumberInput from "../components/phoneNumberInput";
import proptype from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { Supabase } from "./mySupabase";

RegisterNumberStage.propTypes = {
    phoneNumber: proptype.string,
    setPhoneNumber: proptype.func,
    error: proptype.string,
    setError: proptype.func,
    step: proptype.number,
    setStep: proptype.func,
};

export default function RegisterNumberStage({
    phoneNumber,
    setPhoneNumber,
    error,
    setError,
    step,
    setStep,
}) {
    const cc = useRef("234");
    const handleNextStep = async (e) => {
        e.preventDefault();
        try {
            const { error } = await Supabase.auth.signInWithOtp({
                phone: `+234${phoneNumber}`,
            });
            console.warn(error);
        } catch (error) {
            console.error("couldnt send OTP:", error);
        }

        setStep(2);
    };
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate().pop;
    };

    return (
        <>
            <section className="hidden sm:grid md:grid-rows-2 lg:grid-rows-none lg:grid-cols-2 min-h-[100vh] font-inter">
                <div className="bg-slate-200 p-4 sm:pb-[13%] lg:pb-0">
                    <div className="hidden sm:flex justify-between">
                        <img alt="logo" className="h-12" src={logo}></img>
                        <div className="lg:hidden justify-end items-center gap-3">
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
                            <div>Welcome</div> to Moniepoint!
                        </h1>
                        <p className="text-lg font-medium text-black/80 py-5">
                            Collect payments, access loans and manage operations
                            with a business banking solution that meets all your
                            needs.
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
                <div className="bg-slate-100 p-4">
                    <div className="hidden lg:flex justify-end items-center gap-3">
                        <span className="">Already have an account?</span>
                        <Link to="/login">
                            <button className="py-3 px-7 rounded-md bg-blue-100 text-primaryBlue2">
                                Login
                            </button>
                        </Link>
                    </div>

                    <section className="relative sm:top-[-10%] lg:top-[10%] lg:left-[-10%] sm:mx-auto lg:mx-0 bg-white w-[35rem] max-w-[37rem] rounded-xl p-[6%]">
                        <h2 className="text-xl font-bold">Setup a Profile</h2>
                        <p className="text-gray-500">
                            Just enter your phone number to get started
                        </p>
                        <form onSubmit={handleNextStep} className="group">
                            <div className="my-5">
                                <PhoneNumberInput
                                    phoneNumber={phoneNumber}
                                    setPhoneNumber={setPhoneNumber}
                                    error={error}
                                    setError={setError}
                                    cc={cc}
                                />
                            </div>
                            <span className="text-sm ">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 border-0 border-red-400 mr-2"
                                    required
                                ></input>
                                I agree to Moniepoint&apos;s{" "}
                                <span className="text-primaryBlue2">
                                    Terms and Conditions, Privacy Policy
                                </span>{" "}
                                and{" "}
                                <span className="text-primaryBlue2">
                                    Cookies Policy
                                </span>
                            </span>
                            <button
                                className={`w-full py-4 text-lg mt-[1.5rem] rounded-sm group-has-[:disabled]:bg-gray-200 
                                                        group-has-[:disabled]:text-gray-500 group-not-has-[:disabled]:bg-primaryBlue2 
                                                        group-not-has-[:disabled]:text-white transition-all duration-300`}
                                disabled={phoneNumber.length < 10 || error}
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
                        onClick={handleNavigate}
                        version="1.1"
                        className="rotate-90 w-9 h-10 fill-primaryBlue2"
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
                        What&apos;s your Phone Number?
                    </h1>
                    <p className="text-sm my-3">
                        Enter the phone number you want to use for this account.
                    </p>
                    <form onSubmit={handleNextStep} className="group">
                        <div className="rounded-lg bg-white p-4">
                            <PhoneNumberInput
                                phoneNumber={phoneNumber}
                                setPhoneNumber={setPhoneNumber}
                                error={error}
                                setError={setError}
                            />
                        </div>
                        <div className="mt-30">
                            <span className="text-xs">
                                <input
                                    type="checkbox"
                                    className="w-3 h-3 border-0 border-red-400 mr-2"
                                    required
                                ></input>
                                I agree to Moniepoint&apos;s{" "}
                                <span className="text-primaryBlue2">
                                    Terms and Conditions, Privacy Policy
                                </span>{" "}
                                and{" "}
                                <span className="text-primaryBlue2">
                                    Cookies Policy
                                </span>
                            </span>
                        </div>
                        <button
                            className={`w-full py-4 text-md mt-[1.5rem] rounded-sm group-has-[:disabled]:bg-gray-200 
                                                        group-has-[:disabled]:text-gray-500 group-not-has-[:disabled]:bg-primaryBlue2 
                                                        group-not-has-[:disabled]:text-white transition-all duration-300`}
                            disabled={phoneNumber.length < 10 || error}
                        >
                            Next
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
