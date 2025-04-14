import GetItOnButton from "./getItOnButton";
import ScrollRolly from "./scrollRolly";
import ScrollRollyItem from "./scrollRollyItem";
import { useEffect, useState } from "react";

export default function StepsSection() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const scroll = document.querySelector("#scroll");
        const animate = () => {
            //console.log(window.scrollY);
            const temp =
                ((window.scrollY - 6300) / (scroll.scrollHeight - 1000)) * 100;
            if (temp < 100) setProgress(temp);
            else if (temp <= 0) setProgress(0);
            else setProgress(100);
            //console.log(`${progress}%`);
        };
        window.addEventListener("scroll", animate);
        return () => window.removeEventListener("scroll", animate);
    }, [progress]);

    return (
        <>
            <section
                id="scroll"
                className="p-[2%] pt-[10%] font-inter h-[250rem] overflow-x-clip hidden lg:block"
            >
                <div className="lg:grid grid-cols-[33.3%_29%_auto] gap-x-5">
                    <div className="">
                        <h1 className="text-3xl lg:text-4xl text-blue-950 font-semibold">
                            How to Get Started
                        </h1>
                        <h2 className="text-blue-950 lg:text-xl mt-3">
                            Your journey with moniepoint starts here!
                        </h2>
                        <h3 className="text-blue-950 lg:text-xl mb-3">
                            Just follow these easy steps
                        </h3>
                    </div>
                    <div className="hidden lg:block">
                        <img
                            alt=""
                            className="rounded-xl"
                            src="/images/scrollAnimationFirstHero.png"
                        ></img>
                    </div>
                </div>

                <section
                    className="sticky top-[25%] ml-[40%]"
                    style={{ transform: `translateX(-${progress * 1.65}%)` }}
                >
                    <section className="mt-20 flex">
                        <ScrollRolly>
                            <ScrollRollyItem
                                heading="Fill in your details and verify your phone number"
                                count={1}
                                progress={progress}
                            >
                                Provide your email and phone number and verify
                                your phone number with an OTP.
                            </ScrollRollyItem>
                            <ScrollRollyItem
                                heading="Get verified with your BVN and KYC details"
                                count={2}
                                progress={progress}
                            >
                                Select username and password.Provide your BVN
                                and KYC details and start face and ID
                                verification You can then provide your business
                                name and set up a PIN for managing your account.
                            </ScrollRollyItem>
                            <ScrollRollyItem
                                heading="Fund your account to start transfers"
                                count={3}
                                progress={progress}
                            >
                                top up to start making transfers
                            </ScrollRollyItem>
                            <ScrollRollyItem
                                heading="Access your account dashboard and apply for an expense card."
                                count={4}
                                progress={progress}
                            >
                                Login to your business dashboard and click on
                                the Card menu to get an expense card.
                            </ScrollRollyItem>
                        </ScrollRolly>
                    </section>
                </section>
                <div className="relative top-[190rem] flex gap-x-[1.5rem] justify-center mt-10">
                    <GetItOnButton bool="appStore" />
                    <GetItOnButton bool="playStore" />
                </div>
            </section>
        </>
    );
}
