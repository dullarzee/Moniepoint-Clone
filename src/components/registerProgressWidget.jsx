import proptype from "prop-types";

RegisterProgressWidget.propTypes = {
    step: proptype.string,
};

export default function RegisterProgressWidget({ step }) {
    return (
        <>
            <section className="grid grid-cols-[20%_80%] w-45 h-75">
                <div className="flex flex-col">
                    {new Array(4).fill("").map((_, i) => {
                        return (
                            <div
                                key={i}
                                className={`flex flex-col items-center`}
                            >
                                <div
                                    className={`w-5 h-5 rounded-full m-1 z-10 ${
                                        step > i + 1 &&
                                        "bg-green-600 border-3 border-green-500 outline-3 outline-green-300 p-0.5 w-6.5 h-6.5"
                                    } ${
                                        step === i + 1 &&
                                        "bg-blue-200 outline-3 outline-primaryBlue2 outline-offset-[3px] border-3 border-transparent p-0.5"
                                    }
                                    ${
                                        step < i + 1 &&
                                        "bg-slate-200 outline-3 outline-slate-300 outline-offset-[3px]"
                                    }`}
                                >
                                    {step > i + 1 && (
                                        <svg
                                            className="fill-white"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M9 16.219l10.594-10.641 1.406 1.406-12 12-5.578-5.578 1.359-1.406z"></path>
                                        </svg>
                                    )}
                                </div>
                                {i !== 3 && (
                                    <div
                                        className={`h-15 w-1 ${
                                            step > i + 1
                                                ? "bg-green-500"
                                                : "bg-slate-300"
                                        }`}
                                    ></div>
                                )}
                            </div>
                        );
                    })}
                </div>
                <ul className="flex flex-col items-start justify-between pl-1">
                    <li>
                        <h2 className="text-sm text-slate-500">STEP 1</h2>
                        <span className="font-semibold">Email Address</span>
                    </li>
                    <li>
                        <h2 className="text-sm text-slate-500">STEP 2</h2>
                        <span className="font-semibold">Verification</span>
                    </li>
                    <li>
                        <h2 className="text-sm text-slate-500">STEP 3</h2>
                        <span className="font-semibold">Setup Passcode</span>
                    </li>
                    <li>
                        <h2 className="text-sm text-slate-500">STEP 4</h2>
                        <span className="font-semibold">Success!</span>
                    </li>
                </ul>
            </section>
        </>
    );
}
