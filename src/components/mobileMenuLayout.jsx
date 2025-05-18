import { useState } from "react";
import dropDown from "/images/chevron-down.svg";
import NavBankingContent from "./navBankingContent";
import NavCreditsContent from "./navCreditsContent";
import NavPaymentsContent from "./navPaymentsContent";
import NavBusinessContent from "./navBusinessContent";
import { Link } from "react-router-dom";
export default function MobileMenuLayout() {
    const [content, setContent] = useState("banking");
    return (
        <>
            <div>
                <span className="text-white flex items-center my-3 font-semibold">
                    Products
                    <img
                        alt="drop down button"
                        className="w-4"
                        src={dropDown}
                    ></img>
                </span>
                <div
                    className="flex gap-x-[3%] py-1 px-0.5 items-center **:hover:outline-primaryBlue2 overflow-x-scroll
                [scrollbar-width:none]"
                >
                    <button
                        onClick={() => {
                            setContent("banking");
                        }}
                        className={`py-[0.3rem] px-2.5 outline rounded-full 
                    text-slate-200 text-sm ${
                        content === "banking"
                            ? "outline-primaryBlue2"
                            : "outline-slate-200"
                    }`}
                    >
                        Banking
                    </button>
                    <button
                        onClick={() => {
                            setContent("credits");
                        }}
                        className={`py-[0.3rem] px-2.5 outline rounded-full 
                    text-slate-200 text-sm ${
                        content === "credits"
                            ? "outline-primaryBlue2"
                            : "outline-slate-200"
                    }`}
                    >
                        Credits
                    </button>
                    <button
                        onClick={() => {
                            setContent("payments");
                        }}
                        className={`py-[0.3rem] px-2.5 outline rounded-full 
                    text-slate-200 text-sm ${
                        content === "payments"
                            ? "outline-primaryBlue2"
                            : "outline-slate-200"
                    }`}
                    >
                        Payments
                    </button>
                    <button
                        onClick={() => {
                            setContent("business");
                        }}
                        className={`py-[0.3rem] px-2.5 outline rounded-full text-nowrap 
                    text-slate-200 text-sm ${
                        content === "business"
                            ? "outline-primaryBlue2"
                            : "outline-slate-200"
                    }`}
                    >
                        Business Management
                    </button>
                </div>
                <div className="mt-7">
                    <ul>
                        {content === "banking" && <NavBankingContent />}
                        {content === "credits" && <NavCreditsContent />}
                        {content === "payments" && <NavPaymentsContent />}
                        {content === "business" && <NavBusinessContent />}
                    </ul>
                </div>
                <span className="text-white flex items-center my-3 font-semibold">
                    Company
                    <img
                        alt="drop down button"
                        className="w-4"
                        src={dropDown}
                    ></img>
                </span>
                <ul className="flex flex-col gap-y-4">
                    <li className="flex gap-x-2 items-center text-white font-semibold">
                        <img
                            alt=""
                            className="bg-blue-200 rounded-sm w-8 h-8 shrink-0"
                            src=""
                        ></img>
                        Cultures
                    </li>
                    <li className="flex gap-x-2 items-center text-white font-semibold">
                        <img
                            alt=""
                            className="bg-blue-200 rounded-sm w-8 h-8 shrink-0"
                            src=""
                        ></img>
                        Careers
                    </li>
                    <li className="flex gap-x-2 items-center text-white font-semibold">
                        <img
                            alt=""
                            className="bg-blue-200 rounded-sm w-8 h-8 shrink-0"
                            src=""
                        ></img>
                        Press
                    </li>
                </ul>
                <div className="flex flex-col gap-y-2 mt-3">
                    <span className="text-white text-lg font-semibold">
                        About
                    </span>
                    <span className="text-white text-lg font-semibold">
                        Contact
                    </span>
                    <span className="text-white text-lg font-semibold">
                        Blog
                    </span>
                </div>
                <Link to="/login">
                    <button className="bg-primaryBlue2 w-full rounded-full py-3 cursor-pointer text-white mt-2">
                        Sign in
                    </button>
                </Link>
            </div>
        </>
    );
}
