import GetItOnButton from "./getItOnButton";

export default function FooterSection() {
    return (
        <>
            <footer>
                <section className="grid lg:grid-cols-[25%_75%] min-h-[10rem] bg-blue-950 p-[5%] lg:p-[2%] pt-[4.5%] font-karla">
                    <div>
                        <svg
                            className="w-[9rem]"
                            viewBox="0 0 1019 244"
                            fill=""
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M432.661 108.409C440.567 101.279 450.23 97.7866 461.795 97.7866C473.507 97.7866 483.17 101.279 491.076 108.409C498.981 115.394 502.934 124.561 502.934 135.766C502.934 146.825 498.981 155.992 491.076 162.976C483.316 169.816 473.654 173.308 461.942 173.308C450.23 173.308 440.567 169.816 432.661 162.976C424.902 155.992 420.949 146.825 420.949 135.766C420.949 124.561 424.902 115.394 432.661 108.409ZM461.942 153.082C471.165 153.082 478.485 146.242 478.485 135.766C478.485 125.143 471.165 118.013 461.942 118.013C452.718 118.013 445.398 125.143 445.398 135.766C445.398 146.242 452.865 153.082 461.942 153.082Z"
                                fill="white"
                            />
                            <path
                                d="M558.127 97.7866C547.879 97.7866 540.12 102.006 535.142 110.301H534.849L534.996 108.555V107.536C534.996 102.443 531.482 99.3872 524.894 99.3872H503.227V119.759H508.643C510.839 119.759 511.718 120.778 511.718 122.815V171.562H536.167V139.549C536.167 135.911 536.606 132.71 537.631 130.091C539.973 123.251 544.805 119.759 551.978 119.759C557.395 119.759 560.031 122.96 560.031 129.217V161.376C560.031 168.506 563.105 171.562 570.279 171.562H584.333V124.852C584.333 106.663 575.549 97.7866 558.127 97.7866Z"
                                fill="white"
                            />
                            <path
                                d="M601.755 71.4473V91.0916H622.251V71.4473H601.755ZM614.053 99.3858H591.507V119.758H596.924C598.973 119.758 599.998 120.776 599.998 122.813V161.374C599.998 168.505 603.073 171.56 610.246 171.56H624.301V109.717C624.301 102.442 621.227 99.3858 614.053 99.3858Z"
                                fill="white"
                            />
                            <path
                                d="M643.187 108.555C650.068 101.424 659.292 97.7866 670.711 97.7866C681.105 97.7866 689.304 100.988 695.306 107.536C701.309 113.939 704.383 122.378 704.383 132.564C704.383 134.31 704.237 136.784 703.798 140.131H657.974C659.731 148.571 666.612 153.082 674.957 153.082C680.959 153.082 687.694 150.753 695.014 145.806L704.091 162.831C696.331 169.379 684.326 173.308 673.053 173.308C660.756 173.308 651.093 169.525 643.919 162.103C636.746 154.682 633.232 145.66 633.232 135.474C632.939 124.707 636.306 115.685 643.187 108.555ZM680.227 126.307C680.227 120.196 676.274 115.539 670.272 115.539C664.123 115.539 660.17 119.177 658.559 126.307H680.227Z"
                                fill="white"
                            />
                            <path
                                d="M713.02 100.698H725.757V106.955C725.757 109.865 725.318 112.339 725.318 112.339H725.611C730.149 103.753 739.226 98.9515 749.62 98.9515C768.945 98.9515 780.95 114.085 780.95 136.057C780.95 158.612 767.335 173.163 748.596 173.163C739.519 173.163 731.32 168.652 726.489 161.086H726.196C726.196 161.086 726.782 163.559 726.782 167.197V199.501H713.166V100.698H713.02ZM746.546 161.522C757.819 161.522 767.189 152.355 767.189 136.348C767.189 120.924 758.844 111.029 746.985 111.029C736.298 111.029 726.343 118.596 726.343 136.494C726.343 149.008 733.37 161.522 746.546 161.522Z"
                                fill="white"
                            />
                            <path
                                d="M825.897 98.9515C847.272 98.9515 864.401 114.521 864.401 135.912C864.401 157.448 847.125 173.163 826.044 173.163C804.669 173.163 787.54 157.448 787.54 135.912C787.54 114.521 804.815 98.9515 825.897 98.9515ZM826.044 161.522C839.512 161.522 850.639 150.9 850.639 136.057C850.639 121.36 839.512 110.884 826.044 110.884C812.428 110.884 801.448 121.36 801.448 136.057C801.595 150.9 812.575 161.522 826.044 161.522Z"
                                fill="white"
                            />
                            <path
                                d="M875.087 72.6121H889.142V86.2904H875.087V72.6121ZM875.38 100.696H888.995V171.707H875.38V100.696Z"
                                fill="white"
                            />
                            <path
                                d="M904.368 100.698H917.691V110.302C917.691 113.212 917.251 115.686 917.251 115.686H917.544C920.18 109.574 928.964 98.9515 944.629 98.9515C961.465 98.9515 969.078 108.119 969.078 126.162V171.563H955.462V129.218C955.462 119.323 953.559 111.466 941.993 111.466C928.085 111.466 918.13 122.961 918.13 137.512V171.563H904.515V100.698H904.368Z"
                                fill="white"
                            />
                            <path
                                d="M986.792 112.485H977.422V101.426H987.084V81.1996H1000.55V101.426H1017.83V112.485H1000.55V144.207C1000.55 158.322 1010.51 160.213 1015.78 160.213C1016.8 160.213 1017.68 160.213 1019 159.922V172C1017.83 172.145 1016.36 172.436 1014.17 172.436C1004.95 172.436 986.792 169.526 986.792 145.808V112.485Z"
                                fill="white"
                            />
                            <path
                                d="M413.19 128.779L408.505 71.4473H379.957C379.957 71.4473 358.143 115.683 356.386 121.649H356.093L333.254 71.4473H304.706L300.021 121.213L296.068 171.706H313.49C320.957 171.706 324.031 168.505 324.617 160.647C324.617 160.647 327.545 114.374 327.106 107.68H327.398L328.277 110.736C329.448 114.81 345.699 154.244 345.699 154.244H367.073C367.073 154.244 383.324 115.392 385.373 107.68H385.666L388.155 160.647C388.741 168.505 391.815 171.706 399.282 171.706H416.703L413.19 128.779Z"
                                fill="white"
                            />
                            <path
                                d="M122.978 243.589H122.099C65.2953 243.444 27.2308 231.657 19.3251 224.381C10.9801 216.96 0 178.545 0 121.795C0 65.1899 10.9801 26.6289 19.3251 19.2077C27.2308 11.9321 65.4417 0.145513 122.099 0H122.978C179.782 0.145513 217.846 11.9321 225.752 19.2077C234.097 26.6289 245.077 65.1899 245.077 121.795C245.077 178.399 234.097 216.96 225.752 224.381C217.846 231.803 179.782 243.589 122.978 243.589Z"
                                fill="#0357EE"
                            />
                            <path
                                d="M179.05 129.066L174.365 72.1703H146.109C146.109 72.1703 124.588 115.97 122.685 121.936H122.392L99.6998 72.1703H71.2979L66.613 121.499L62.6602 171.556H79.9356C87.4021 171.556 90.3301 168.355 90.9157 160.497C90.9157 160.497 93.8437 114.66 93.4045 107.967H93.6973L94.5758 111.022C95.747 115.097 111.851 154.24 111.851 154.24H133.079C133.079 154.24 149.184 115.679 151.233 107.967H151.526L154.015 160.497C154.601 168.355 157.675 171.556 164.995 171.556H182.27L179.05 129.066Z"
                                fill="white"
                            />
                        </svg>
                        <p className="text-gray-400 text-[0.9rem] mt-[1.2rem]">
                            Moniepoint Microfinance Bank Limited is authorised
                            and regulated by the Central Bank of Nigeria to
                            offer banking services. Deposits are insured by the
                            Nigerian Deposit Insurance Coporation(NDIC).
                        </p>
                        <div className="flex justify-center gap-x-[1rem] mt-[3rem]">
                            <GetItOnButton bool="appStore" />
                            <GetItOnButton bool="playStore" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 pt-[3rem] lg:ml-[9rem] gap-y-7 lg:gap-y-0">
                        <ul
                            className="**:not-first:text-gray-400 flex flex-col gap-y-2.5 **:not-first:hover:underline
                    **:not-first:cursor-pointer"
                        >
                            <li className="text-white">For Business</li>
                            <li>Business Account</li>
                            <li>Point of Sale Terminal</li>
                            <li>Loan</li>
                            <li>Expense Card</li>
                        </ul>
                        <ul
                            className="**:not-first:text-gray-400 flex flex-col gap-y-2.5 **:not-first:hover:underline
                    **:not-first:cursor-pointer"
                        >
                            <li className="text-white">For Personal</li>
                            <li>Instant Debit Card</li>
                            <li>Personal Account</li>
                            <li>Payment</li>
                            <li>Personal Banking</li>
                        </ul>
                        <ul
                            className="**:not-first:text-gray-400 flex flex-col gap-y-2.5 **:not-first:hover:underline
                    **:not-first:cursor-pointer"
                        >
                            <li className="text-white">Company</li>
                            <li>About us</li>
                            <li>Culture</li>
                            <li>Join our Team</li>
                            <li>Press & Media</li>
                            <li>Contact Us</li>
                        </ul>
                        <ul
                            className="**:not-first:text-gray-400 flex flex-col gap-y-2.5 **:not-first:hover:underline
                    **:not-first:cursor-pointer"
                        >
                            <li className="text-white">Resources</li>
                            <li>Moniepoint Blog</li>
                            <li>Help Centre</li>
                            <li>Learning Centre</li>
                            <li>Whistleblower Policy</li>
                            <li>IMS Policy</li>
                            <li>Report a Vulnerability</li>
                            <li>Informal Economy Report</li>
                            <li>Security Trust Center</li>
                        </ul>
                    </div>
                </section>
                <section className="bg-blue-950 min-h-[10rem] pb-10 grid grid-cols-[55%_45%] gap-x-3 lg:gap-x-0 gap-y-8 lg:gap-y-0 lg:grid-cols-[15%_70%_15%] p-[2%] font-karla">
                    <address className="not-italic text-gray-400 col-span-2 lg:col-span-1">
                        Plot 7A, Block 4,
                        <div className="inline lg:block">Admirality Road,</div>
                        <div className="inline lg:block">
                            Lekki Phase 1, Lagos State.
                        </div>
                        <div className="my-[0.5rem]"></div>
                        <div>support@moniepoint.com</div>
                        +234 814 824 4729
                    </address>
                    <div className="justify-self-center self-end">
                        <span className="text-white">Connect with us</span>
                        <div className="flex gap-x-[0.3rem] mt-2 **:shrink-0">
                            <span className="w-[2rem] h-[2rem] lg:w-[2.5rem] cursor-pointer lg:h-[2.5rem] rounded-full bg-gray-500/50 flex items-center justify-center">
                                <svg
                                    className="w-[55%] h-[55%] fill-gray-300"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                >
                                    <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"></path>
                                </svg>
                            </span>
                            <span className="w-[2rem] h-[2rem] lg:w-[2.5rem] cursor-pointer lg:h-[2.5rem] rounded-full bg-gray-500/50 flex items-center justify-center">
                                <svg
                                    className="w-[55%] h-[55%] fill-gray-300"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    stroke="white"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                >
                                    <path d="M24.325 3h4.411l-9.636 11.013 11.336 14.987h-8.876l-6.952-9.089-7.955 9.089h-4.413l10.307-11.78-10.875-14.22h9.101l6.284 8.308zM22.777 26.36h2.444l-15.776-20.859h-2.623z"></path>
                                </svg>
                            </span>
                            <span className="w-[2rem] h-[2rem] lg:w-[2.5rem] cursor-pointer lg:h-[2.5rem] rounded-full bg-gray-500/50 flex items-center justify-center">
                                <svg
                                    className="w-[55%] h-[55%] fill-gray-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" />
                                </svg>
                            </span>
                            <span className="w-[2rem] h-[2rem] lg:w-[2.5rem] cursor-pointer lg:h-[2.5rem] rounded-full bg-gray-500/50 flex items-center justify-center">
                                <svg
                                    className="w-[55%] h-[55%] fill-gray-300"
                                    viewBox="0 0 25 25"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                        fillRule="nonzero"
                                    />
                                </svg>
                            </span>
                            <span className="w-[2rem] h-[2rem] lg:w-[2.5rem] cursor-pointer lg:h-[2.5rem] rounded-full bg-gray-500/50 flex items-center justify-center">
                                <svg
                                    className="w-[55%] h-[55%] fill-gray-300"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                >
                                    <path d="M31.327 8.273c-0.386-1.353-1.431-2.398-2.756-2.777l-0.028-0.007c-2.493-0.668-12.528-0.668-12.528-0.668s-10.009-0.013-12.528 0.668c-1.353 0.386-2.398 1.431-2.777 2.756l-0.007 0.028c-0.443 2.281-0.696 4.903-0.696 7.585 0 0.054 0 0.109 0 0.163l-0-0.008c-0 0.037-0 0.082-0 0.126 0 2.682 0.253 5.304 0.737 7.845l-0.041-0.26c0.386 1.353 1.431 2.398 2.756 2.777l0.028 0.007c2.491 0.669 12.528 0.669 12.528 0.669s10.008 0 12.528-0.669c1.353-0.386 2.398-1.431 2.777-2.756l0.007-0.028c0.425-2.233 0.668-4.803 0.668-7.429 0-0.099-0-0.198-0.001-0.297l0 0.015c0.001-0.092 0.001-0.201 0.001-0.31 0-2.626-0.243-5.196-0.708-7.687l0.040 0.258zM12.812 20.801v-9.591l8.352 4.803z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-end">
                        <div className="flex gap-x-3 items-center text-white">
                            <img
                                alt="countries flag"
                                className="w-[2.5rem] h-[2.5rem] rounded-full"
                                src="/images/nigerianFlag.jpg"
                            ></img>
                            <button>Nigeria</button>
                            <img
                                alt="drop down arrow"
                                src="/images/chevron-down.svg"
                            ></img>
                        </div>
                    </div>
                </section>
                <div className="p-[2%] bg-blue-950">
                    <div
                        className="pt-[2%] font-karla border-t-2 lg:border-0 border-gray-500/50 text-gray-400 flex justify-between 
                bg-blue-950 pb-[2.5rem]"
                    >
                        <span className="hidden lg:block">
                            Copyright&copy;2025, Moniepoint
                        </span>
                        <div className="gap-x-[7rem] flex">
                            <span className="shrink-0 hover:underline cursor-pointer">
                                Privacy Policy
                            </span>
                            <span className="shrink-0 hover:underline cursor-pointer">
                                Cookie Policy
                            </span>
                        </div>
                    </div>
                    <div className="block lg:hidden text-gray-400 mb-[3rem]">
                        Copyright&copy;2025, Moniepoint
                    </div>
                </div>
                <div className="p-[2%] text-gray-400 bg-blue-950 text-xs lg:text-sm leading-[170%]">
                    &copy;2025. Moniepoint is a bank with it&apos;s services
                    provided by Moniepoint MFB Limited and duly licensed by the
                    central bank of nigeria. Unauthorised reproduction and
                    redistribution of copyrighted materials on this website and
                    moniePoint&apos;s digital media pages is strictly
                    prohibited. By clicking on some of the links above, You will
                    leave moniepoint&apos;s website and be redirected to a third
                    party website. The privacy practices of those third parties
                    might differ from those of moniepoint. We recommend you
                    review the privacy statements of those third party website,
                    as moniepoint is not responsible for those third
                    parties&apos; privacy or security practices. Additional
                    disclosures can be found in the resources section of our
                    website.
                </div>
            </footer>
        </>
    );
}
