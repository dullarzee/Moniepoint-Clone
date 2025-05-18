import PassCodeInput from "./passCodeInput";
import { useState } from "react";
import proptype from "prop-types";
import Supabase from "./mySupabase";
import { useNavigate } from "react-router-dom";
import CloudErrorState from "./cloudErrorState";

LoginPassCodeStage.propTypes = {
    setStage: proptype.string,
    email: proptype.string,
};

export default function LoginPassCodeStage({ setStage, email }) {
    const [passCode, setPassCode] = useState("");
    const [errorState0, setErrorState0] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const { data } = await Supabase.from("Moniepoint-clone-users-data")
                .select("*")
                .eq("email", email);
            if (data[0].passcode === passCode) {
                navigate("/dashboard");
            } else setErrorState0(true);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <section className="font-inter">
                <div className="group w-[85%] mx-auto">
                    <h1 className="text-2xl font-medium">Enter Passcode</h1>
                    <h2 className="text-sm">Enter your 6 digit passcode</h2>
                    <PassCodeInput setPassCode={setPassCode} />
                    <div className="flex justify-end my-4">
                        <button className="cursor-pointer text-primaryBlue2">
                            Forgot Passcode?
                        </button>
                    </div>
                    <button
                        onClick={handleLogin}
                        className={`w-full py-4 text-lg mt-[1.5rem] rounded-sm group-has-[:disabled]:bg-gray-200 
                                    group-has-[:disabled]:text-gray-500 group-not-has-[:disabled]:bg-primaryBlue2 
                                    group-not-has-[:disabled]:text-white transition-all duration-300`}
                        disabled={passCode.length < 6}
                    >
                        Login
                    </button>
                    <div className="flex justify-center mt-2">
                        <button
                            onClick={() => {
                                setStage("id");
                            }}
                            className="text-center font-bold text-lg text-primaryBlue2"
                        >
                            Back
                        </button>
                    </div>
                </div>
            </section>
            {errorState0 && (
                <CloudErrorState setErrorState={setErrorState0} error="warning">
                    Passcode Incorrect!
                </CloudErrorState>
            )}
        </>
    );
}
