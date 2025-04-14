import Rolly from "../components/rolly";

export default function BusinessDependSection() {
    return (
        <>
            <div>
                <section
                    className="min-h-[20rem] w-[95%] mx-auto relative top-[-2rem] md:top-[-0.5rem] rounded-3xl
            bg-white pt-[5%] pb-[3%]"
                >
                    <section className="lg:grid grid-cols-3 ml-[7%]">
                        <h1 className="hidden lg:block text-slate-800 text-4xl font-semibold pt-0">
                            Businesses that count on us
                        </h1>
                        <h2 className="font-semibold text-slate-500 text-lg">
                            Join{" "}
                            <span className="text-indigo-600 font-bold">
                                5 million
                            </span>{" "}
                            business owners on the Moniepoint platform
                        </h2>
                        <h3 className="hidden lg:block font-londrina text-9xl text-blue-500 ">
                            5m+
                        </h3>
                    </section>
                    <div className="mt-[4rem] overflow-hidden">
                        <Rolly />
                    </div>
                </section>
            </div>
        </>
    );
}
