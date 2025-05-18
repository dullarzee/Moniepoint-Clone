import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import proptype from "prop-types";

ResendOTP.propTypes = {
    otpRef: proptype.object,
    email: proptype.string,
    setErrorState: proptype.func,
};

export default function ResendOTP({ otpRef, email, setErrorState }) {
    const [countDown, setCountDown] = useState(45);
    const generateOtp = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };

    useEffect(() => {
        const id = setTimeout(() => {
            if (countDown > 0) {
                setCountDown(countDown - 1);
            } else {
                clearTimeout(id);
            }
        }, 1000);
    }, [countDown]);

    const handleOTPResend = async (e) => {
        e.preventDefault();
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
                otpRef.current = otp;
                alert("OTP has been resent! Check your inbox.");
                setCountDown(60);
            })
            .catch((error) => {
                console.error("couldnt send otp:", error);
                setErrorState(true);
            });
    };

    return (
        <>
            <div className="flex items-center justify-between h-15 md:h-20 bg-blue-100 rounded-lg px-3">
                <div className="text-sm ">Didn&apos;t get the code?</div>
                {countDown === 0 ? (
                    <button
                        onClick={handleOTPResend}
                        className="text-primaryBlue2 font-medium cursor-pointer"
                    >
                        Resend
                    </button>
                ) : (
                    <span className="text-red-400 font-medium">
                        {`00:${countDown}`}
                    </span>
                )}
            </div>
        </>
    );
}
