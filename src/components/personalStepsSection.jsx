import ScrollRolly from "./scrollRolly";
import ScrollRollyItem from "./scrollRollyItem";
import GetItOnButton from "./getItOnButton";
import { useState, useEffect } from "react";

export default function PersonalStepsSection() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const scroll = document.querySelector("#scroll2");
        const animate = () => {
            //console.log(window.scrollY);
            const temp =
                ((window.scrollY - 4750) / (scroll.scrollHeight - 1000)) * 100;
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
                id="scroll2"
                className="p-[2%] pt-[10%] hidden lg:block font-inter bg-slate-50 h-[250rem] overflow-x-clip"
            >
                <div className="grid lg:grid-cols-[33.3%_29%_auto] gap-x-5">
                    <div className="">
                        <h1 className="text-3xl lg:text-4xl text-blue-950 font-semibold">
                            Open an account in 5 Minutes
                        </h1>
                    </div>
                    <div className="hidden lg:block">
                        <img
                            alt=""
                            className="rounded-xl"
                            src="/images/personalScrollRollyHero.png"
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
                                your phone number
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
                                Click on &quot;add money&quot; to find your
                                account details, and top up to start making
                                transfers.
                            </ScrollRollyItem>
                            <ScrollRollyItem
                                heading="You're done!"
                                count={4}
                                progress={progress}
                            >
                                Click on the card menu to order a card and get
                                it in 48hrs.
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
