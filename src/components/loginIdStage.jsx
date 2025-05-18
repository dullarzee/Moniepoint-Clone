import EmailInput from "./emailInput";
import PhoneNumberInput from "./phoneNumberInput";
import proptype from "prop-types";
import Supabase from "./mySupabase";
import CloudErrorState from "./cloudErrorState";
import { useState } from "react";

LoginIdStage.propTypes = {
    phoneNumber: proptype.string,
    setPhoneNumber: proptype.func,
    verifyMethod: proptype.string,
    setVerifyMethod: proptype.func,
    userName: proptype.string,
    setUserName: proptype.func,
    error: proptype.string,
    setError: proptype.func,
    setStage: proptype.func,
    email: proptype.string,
    setEmail: proptype.func,
};
export default function LoginIdStage({
    phoneNumber,
    setPhoneNumber,
    verifyMethod,
    setVerifyMethod,
    email,
    setEmail,
    error,
    setError,
    setStage,
}) {
    const [errorState0, setErrorState0] = useState(false);
    let method1 = "";
    let method2 = "";
    if (verifyMethod === "email") {
        method1 = "border-b-2 border-b-sky-500 text-primaryBlue2";
        method2 = "";
    } else if (verifyMethod === "phoneNumber") {
        method2 = "border-b-2 border-b-sky-500 text-primaryBlue2";
        method1 = "";
    }

    const handleToPassword = async (e) => {
        e.preventDefault();
        try {
            const { data } = await Supabase.from("Moniepoint-clone-users-data")
                .select("*")
                .eq("email", email);
            if (data.length > 0) setStage("passcode");
            else setErrorState0(true);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="w-[85%] mx-auto">
                <div className="flex border-b-2 gap-x-8 border-b-gray-200/50">
                    <button
                        onClick={() => setVerifyMethod("email")}
                        aria-label="enter phone number"
                        className={`py-2 font-medium cursor-pointer ${method1}`}
                    >
                        Email Address
                    </button>
                    <button
                        onClick={() => setVerifyMethod("phoneNumber")}
                        aria-label="enter username"
                        className={`py-2 font-medium cursor-pointer ${method2}`}
                    >
                        Phone Number
                    </button>
                </div>
                {/*login node for phone number*/}
                {verifyMethod === "phoneNumber" ? (
                    <form onSubmit={handleToPassword}>
                        <div className="group mt-9">
                            <PhoneNumberInput
                                phoneNumber={phoneNumber}
                                setPhoneNumber={setPhoneNumber}
                                error={error}
                                setError={setError}
                                disabled={true}
                            />
                            <button
                                className={`w-full py-4 text-lg mt-[1.5rem] rounded-sm group-has-[:disabled]:bg-gray-200 
                                                group-has-[:disabled]:text-gray-500 group-not-has-[:disabled]:bg-primaryBlue2 
                                                group-not-has-[:disabled]:text-white transition-all duration-300`}
                                disabled={phoneNumber.length < 10 || error}
                            >
                                Next
                            </button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handleToPassword} className="group">
                        <div className="my-5">
                            <EmailInput
                                email={email}
                                setEmail={setEmail}
                                error={error}
                                setError={setError}
                            />
                        </div>
                        <button
                            className={`w-full py-4 text-lg mt-[1.5rem] rounded-sm bg-primaryBlue2 disabled:text-gray-500 disabled:bg-gray-200 disabled:cursor-not-allowed text-white transition-all duration-300`}
                            disabled={email.length < 1}
                        >
                            {" "}
                            Continue
                        </button>
                    </form>
                )}
                <span className="text-sm text-gray-500 font-semibold">
                    NB:{" "}
                    <span className="font-light text-gray-400">
                        Login by phone Number is not supported yet.
                    </span>
                </span>
            </div>
            {errorState0 && (
                <CloudErrorState setErrorState={setErrorState0} error="warning">
                    User doesn&apos;t exist!
                </CloudErrorState>
            )}
        </>
    );
}
