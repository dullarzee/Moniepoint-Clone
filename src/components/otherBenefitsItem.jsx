import proptype from "prop-types";

OtherBenefitsItem.propTypes = {
    children: proptype.object,
    h1: proptype.string,
    h2: proptype.string,
    svg: proptype.string,
};

export default function OtherBenefitsItem({ children, h1, h2, svg }) {
    return (
        <>
            <div className="bg-white p-8 py-13 border font-red border-sky-100 rounded-2xl flex flex-col gap-y-[9%] h-[26rem]">
                <div className="w-[6.5rem] h-[6.5rem] bg-red-50 flex items-center justify-center mb-[1.5rem]">
                    {svg}
                </div>
                <div className="flex flex-col gap-y-[0.8rem]">
                    <h2 className="text-md font-semibold text-primaryBlue2">
                        {h1}
                    </h2>
                    <h3 className="text-xl lg:text-2xl font-semibold text-primaryBlue">
                        {h2}
                    </h3>
                    <p className="text-[0.95rem] lg:text-[1.1rem] font-medium  text-blue-900">
                        {children}
                    </p>
                </div>
            </div>
        </>
    );
}
