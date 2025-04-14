import GetItOnButton from "./getItOnButton";
import Hero1 from "/images/personalHomePageHeaderHero.png";

export default function PersonalHomePageHeader() {
    return (
        <>
            <section
                className="grid lg:grid-cols-[40%_60%] pt-[23%] lg:pt-[6.5%] p-[2%] bg-primaryBlue2 text-white"
                style={{
                    borderBottom: "4px solid black",
                    borderImageSource: "url('/images/curvedDownward.svg')",
                    borderImageSlice: "0 0 100% 0",
                    borderImageWidth: "0 0 4 0",
                }}
            >
                <div>
                    <h1 className="font-red font-semibold text-[1.7rem] md:text-[3.4rem] w-[50%] text-center lg:text-left mx-auto lg:mx-0 lg:w-[75%] mt-[30%] leading-[130%]">
                        Get the card that{" "}
                        <span className="text-yellow-200">works</span>.
                    </h1>
                    <p className="font-inter text-md md:text-[1.1rem] text-center lg:text-left w-full my-[5.5%] text-gray-300">
                        Brought to you by the same technology that powers
                        Nigeria&apos;s most trusted POS, Moniepoint offers you a
                        reliable personal banking experience.
                    </p>
                    <div className="flex gap-x-[1rem] justify-center lg:justify-normal font-inter">
                        <GetItOnButton bool="appStore" />
                        <GetItOnButton bool="playStore" />
                    </div>
                    <p className="flex mt-[7%] items-center text-xs lg:text-base justify-center lg:justify-normal">
                        We are licensed by{" "}
                        <img
                            alt="CBN logo"
                            className="h-[1.2rem] w-[0.8rem] lg:h-[2rem] lg:w-[1.5rem] mx-[0.4rem]"
                            src="/images/central-bank-of-nigeria-cbn-seeklogo.png"
                        ></img>{" "}
                        and insured by
                        <img
                            alt=""
                            className="w-[2rem] h-[1.1rem] lg:w-[4.5rem] lg:h-[2.1rem] mx-[0.4rem] rounded-lg"
                            src="/images/NdicLogo.png"
                        ></img>
                    </p>
                </div>
                <div>
                    <img
                        alt="woman smiling"
                        className="w-full h-full hidden lg:block"
                        src={Hero1}
                    ></img>
                </div>
            </section>
        </>
    );
}
