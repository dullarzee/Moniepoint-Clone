import proptype from "prop-types";
MobileScrollRollyItem.propTypes = {
    count: proptype.number,
    heading: proptype.string,
    children: proptype.object,
};
export default function MobileScrollRollyItem({ count, heading, children }) {
    return (
        <>
            <section>
                <div className="grid grid-cols-[21%_79%]">
                    <div className="flex flex-col items-center">
                        <span
                            className="inline-flex justify-center items-center w-[3rem] rounded-full 
                        h-[3rem] border-2 border-primaryBlue2 shrink-0 text-primaryBlue2 font-semibold
                        "
                        >
                            {count}
                        </span>
                        {count !== 4 && (
                            <div className="h-full border-1 border-primaryBlue2 w-0"></div>
                        )}
                    </div>
                    <div className="pb-6">
                        <h1 className="text-xl font-red font-semibold text-primaryBlue">
                            {heading}
                        </h1>
                        <p className="text-primaryBlue/80 w-[90%]">
                            {children}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
