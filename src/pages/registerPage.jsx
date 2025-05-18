import { useState, useRef } from "react";
import RegisterEmailStage from "../components/registerEmailStage";
import RegisterOTPStage from "../components/registerOTPStage";
import RegisterPasscodeStage from "../components/registerPasscodeStage";
import RegisterSuccessStage from "../components/registerSuccessStage";

export default function RegisterPage() {
    //const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [step, setStep] = useState(1);
    const otpRef = useRef("");

    return (
        <>
            {step === 1 && (
                <RegisterEmailStage
                    email={email}
                    setEmail={setEmail}
                    error={error}
                    setError={setError}
                    step={step}
                    setStep={setStep}
                    otpRef={otpRef}
                />
            )}
            {step === 2 && (
                <RegisterOTPStage
                    step={step}
                    setStep={setStep}
                    otpRef={otpRef}
                    email={email}
                />
            )}

            {step === 3 && (
                <RegisterPasscodeStage
                    step={step}
                    setStep={setStep}
                    email={email}
                />
            )}
            {step === 4 && <RegisterSuccessStage step={step} />}
        </>
    );
}
