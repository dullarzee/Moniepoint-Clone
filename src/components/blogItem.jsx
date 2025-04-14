import proptype from "prop-types";

BlogItem.propTypes = {
    children: proptype.object,
    time: proptype.string,
    heading: proptype.string,
};

export default function BlogItem({ children, time, heading }) {
    return (
        <>
            <div>
                <div className="**:h-full w-[15rem] lg:w-[23rem]">
                    {children}
                </div>
                <div className="mt-[1rem] flex flex-col">
                    <div className="flex justify-between">
                        <span className="text-blue-500 text-sm">
                            Business Tips
                        </span>
                        <span className="text-gray-400 text-sm">{time}</span>
                    </div>
                    <h2 className="text-lg lg:text-2xl text-blue-950 my-[1rem] font-semibold">
                        {heading}
                    </h2>
                    <span className="text-gray-700">by Moniepoint MFB</span>
                </div>
            </div>
        </>
    );
}
