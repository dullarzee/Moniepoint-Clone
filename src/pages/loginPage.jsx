import LoginIdStage from "../components/loginIdStage";
import LoginPassCodeStage from "../components/loginPassCodeStage";
import M_Logo from "/images/M_moniepoint_logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [verifyMethod, setVerifyMethod] = useState("email");
    const [userName, setUserName] = useState("");
    const [error, setError] = useState("");
    const [stage, setStage] = useState("id");
    const [email, setEmail] = useState("");

    return (
        <>
            {/*main login modal*/}
            <div className="bg-blue-800 min-h-[100vh]">
                <div
                    className={`mx-auto w-[39rem] max-w-[90vw] rounded-bl-lg rounded-br-lg 
                border border-white bg-white ${
                    stage === "passcode" ? "h-[33rem]" : "h-[29rem]"
                }`}
                >
                    <img
                        alt="logo"
                        className="mx-auto w-[3.7rem] h-[3.7rem] mt-[2rem]"
                        src={M_Logo}
                    ></img>
                    <h1 className="font-inter text-center text-3xl font-medium my-4">
                        Login to Moniepoint
                    </h1>
                    {stage === "id" && (
                        <LoginIdStage
                            phoneNumber={phoneNumber}
                            setPhoneNumber={setPhoneNumber}
                            verifyMethod={verifyMethod}
                            setVerifyMethod={setVerifyMethod}
                            userName={userName}
                            setUserName={setUserName}
                            error={error}
                            email={email}
                            setEmail={setEmail}
                            setError={setError}
                            setStage={setStage}
                        />
                    )}
                    {stage === "passcode" && (
                        <LoginPassCodeStage setStage={setStage} email={email} />
                    )}
                </div>

                <div className="mx-auto w-[39rem] max-w-[90vw]">
                    <div className="w-[80%] md:w-full py-4 mt-5 cursor-pointer mx-auto bg-white/20 rounded-xl text-sm md:text-lg text-white font-inter text-center">
                        <Link className="" to="/register">
                            <span className="text-white/50">
                                New to Moniepoint?
                            </span>{" "}
                            Sign up
                        </Link>
                    </div>

                    <p className="text-white text-center font-inter text-sm md:text-lg mt-14 font-light">
                        Licensed by the{" "}
                        <span className="font-bold">
                            Central Bank of Nigeria
                        </span>{" "}
                        and insured by the{" "}
                        <span className="font-bold">NDIC</span>
                    </p>
                </div>
            </div>
        </>
    );
}
