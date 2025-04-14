import { useEffect, useState, useRef } from "react";
import SubSectionInTNS from "./subSectionInTNS";
import ToolsNeededSectionPicker from "./toolsNeededSectionPicker";

export default function ToolsNeededSection() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    const [track, setTrack] = useState(0);
    const [pick, setPick] = useState(1);
    useEffect(() => {
        const detection = () => {
            setTrack(window.scrollY);
            if (track > 900 && track < 2000) {
                setPick(1);
                //console.log("entered first");
            } else if (track > 2000 && track < 2800) {
                setPick(2);
                //console.log("entered second");
            } else if (track > 2800 && track < 3300) {
                setPick(3);
                //console.log("entered third");
            } else if (track > 3300 && track < 4000) {
                setPick(4);
                //console.log('entered fourth');
            }
        };
        window.addEventListener("scroll", detection);
        return () => window.removeEventListener("scroll", detection);
    }, [track]);

    return (
        <>
            <section className="mt-3 lg:mt-14">
                <div className="font-inter pb-[7rem]">
                    <h4 className="text-2xl lg:text-4xl font-semibold text-blue-950 lg:w-[50%] mx-auto text-center">
                        All the tools you need to run your business with ease
                    </h4>
                    <div className="my-15 sticky top-[16%] z-40">
                        <ToolsNeededSectionPicker
                            one={ref1}
                            two={ref2}
                            three={ref3}
                            four={ref4}
                            pick={pick}
                            setPick={setPick}
                        />
                    </div>

                    <SubSectionInTNS
                        refs={ref1}
                        heading="A free bank account to power your business"
                        about="Business Account"
                        actionButton={true}
                        imageSrc="/images/freeBankAccountHero.jpg"
                    >
                        Open a free bank account in your business name, in
                        minutes. Access round the clock support with no hidden
                        fees and complete control over your account
                    </SubSectionInTNS>

                    <SubSectionInTNS
                        refs={ref2}
                        heading="POS machine wey no get wahala"
                        about="Point of Sale Terminal"
                        actionButton={true}
                        imageSrc="/images/posMachineHero.png"
                    >
                        Accept card and transfer payment seamlessly, with a
                        reliable point of sale terminal. Enjoy instant
                        settlement, easy dispute resolution, and instant
                        payments every time.
                    </SubSectionInTNS>

                    <SubSectionInTNS
                        refs={ref3}
                        heading="A secure card for your business expenses"
                        about="Expense card"
                        actionButton={false}
                        imageSrc="/images/AtmCardHero.png"
                    >
                        Order an expense card to spend and manage your business
                        finance effectively, and get it ib 48 hours. Track your
                        business expenses and set different limits for different
                        needs.
                    </SubSectionInTNS>

                    <SubSectionInTNS
                        refs={ref4}
                        heading="Flexible loans that help your business grow"
                        about="Working Capital Loans"
                        actionButton={true}
                        imageSrc="/images/flexibleLoansHero.png"
                    >
                        Access working capital loans to help your business
                        grow.Easy request process with business
                        friendly-interest rate and repayment tenures.
                    </SubSectionInTNS>
                </div>
            </section>
        </>
    );
}
