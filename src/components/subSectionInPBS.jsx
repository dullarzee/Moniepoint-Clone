import proptype from "prop-types";

SubSectionInPBS.propTypes = {
    about: proptype.string,
    children: proptype.object,
    heading: proptype.string,
    imageSrc: proptype.string,
    alt: proptype.string,
};

export default function SubSectionInPBS({
    about,
    children,
    heading,
    imageSrc,
    alt,
}) {
    return (
        <>
            <section className="grid grid-rows-[40%_60%] gap-y-[7%] belowTablet:gap-y-[14.5%] lg:gap-y-0 md:grid-rows-none md:grid-cols-2 font-red">
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
                        <button className="px-[1.4rem] py-[0.9rem] rounded-lg bg-primaryBlue2 text-white">
                            Learn more
                        </button>
                    </div>
                </div>
                <div>
                    <img alt={alt} src={imageSrc}></img>
                </div>
            </section>
        </>
    );
}
