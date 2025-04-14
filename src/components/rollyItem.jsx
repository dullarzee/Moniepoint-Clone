import proptype from "prop-types";

RollyItem.propTypes = {
    children: proptype.object,
};

export default function RollyItem({ children }) {
    return (
        <>
            <div className="flex items-center shrink-0 h-full w-[7rem] lg:w-[15rem] rounded-lg border-2 border-gray-200">
                {children}
            </div>
        </>
    );
}
