import proptype from "prop-types";

SubSectionInTNS.propTypes = {
    about: proptype.string,
    children: proptype.object,
    heading: proptype.string,
    actionButton: proptype.string,
    imageSrc: proptype.string,
    refs: proptype.object,
};

export default function SubSectionInTNS({
    about,
    children,
    heading,
    actionButton,
    imageSrc,
    refs,
}) {
    return (
        <>
            <section
                ref={refs}
                className="grid grid-rows-[40%_60%] gap-y-[7%] belowTablet:gap-y-[14.5%] lg:gap-y-0 md:grid-rows-none md:grid-cols-2"
            >
                <div className="p-[5%] order-2 lg:order-0 pt-[2rem] lg:pt-0 lg:pl-[12%] flex flex-col gap-y-[1.5rem] items-start">
                    <span
                        className="text-sm lg:text-base bg-blue-200 px-[0.7rem] py-[0.3rem] rounded-full
                    text-blue-950 font-semibold"
                    >
                        {about}
                    </span>
                    <h1 className="text-2xl lg:text-4xl font-semibold text-blue-950 w-full lg:w-[70%]">
                        {heading}
                    </h1>
                    <p className="text-blue-950/90 text-sm lg:text-base lg:w-[79%]">
                        {children}
                    </p>
                    <div className="flex gap-x-[1rem]">
                        <a href="/register" target="_blank">
                            <button className="px-[1.4rem] py-[0.9rem] text-sm lg:text-base bg-indigo-600 rounded-lg text-white">
                                {actionButton
                                    ? "Open an account"
                                    : "Get a card"}
                            </button>
                            <button className="px-[1.4rem] py-[0.9rem] rounded-lg bg-white text-indigo-600">
                                Learn more
                            </button>
                        </a>
                    </div>
                </div>
                <div className="order-1 lg:order-0">
                    <img alt="" src={imageSrc}></img>
                </div>
            </section>
        </>
    );
}
