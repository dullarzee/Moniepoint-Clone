import proptype from "prop-types";

FaqSection.propTypes = {
    children: proptype.object,
};
export default function FaqSection({ children }) {
    return (
        <>
            <section className="bg-slate-50 py-[6rem] pt-[11rem]">
                <h1 className="text-blue-950 text-center text-2xl px-[15%] lg:px-0 lg:text-5xl font-red font-semibold">
                    Frequently Asked Questions
                </h1>
                <div className=" flex flex-col gap-y-[0.8rem] my-[5rem]">
                    {children}
                </div>
            </section>
        </>
    );
}
