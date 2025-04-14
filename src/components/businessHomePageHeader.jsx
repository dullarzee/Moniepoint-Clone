import photo1 from "/images/BusinessInitialPace.png";

export default function BusinessHomePageHeader() {
    return (
        <>
            <div>
                <section
                    className="lg:grid grid-cols-[45%_55%] bg-primaryBlue min-h-[35rem] lg:min-h-[55rem]
                pt-[23%] lg:pt-[6.5%] [border-image:url('/images/curvedDownward.svg')]"
                >
                    <div className="p-[2.5%] text-white font-inter text-sm pt-[20%]">
                        <span className="inline-flex items-center gap-x-[1rem] px-[2.3%] lg:px-[4%] py-[0.5rem] lg:py-[1rem] mb-[2.5rem] rounded-full bg-blue-300/30">
                            <svg
                                className="w-[1.5rem] h-[1.5rem] stroke-blue-200"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                                />
                            </svg>
                            <span className="text-xs md:text-base">
                                Africa&apos;s fastest growing financial
                                institution 2023/2024
                            </span>
                        </span>
                        <h1 className="text-xl text-center lg:text-left md:text-[3.5rem] font-semibold">
                            Simple solutions to{" "}
                            <span className="text-blue-200">
                                power your business
                            </span>
                        </h1>
                        <p className="my-[5%] text-[1rem] md:text-lg text-center lg:text-left text-white/70">
                            Collect payments, access loans and manage operations
                            with business banking solutions that meets all your
                            needs
                        </p>
                        <button
                            className="inline-flex gap-x-[0.8rem] items-center text-[1rem] px-[1.5rem] py-[1rem]
                    bg-blue-600 rounded-xl ml-[18%] md:ml-[34%] lg:mx-0 cursor-pointer"
                        >
                            Open an Account
                            <svg
                                version="1.1"
                                className="fill-white w-[1.2rem] h-[1.2rem]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                            >
                                <path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
                            </svg>
                        </button>
                        <p className="flex mt-[7%] md:mt-[2%] items-center text-xs lg:text-base justify-center lg:justify-normal">
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
                    <div className="hidden lg:block">
                        <img
                            alt="grid of photos"
                            className=""
                            src={photo1}
                        ></img>
                    </div>
                </section>
            </div>
        </>
    );
}
