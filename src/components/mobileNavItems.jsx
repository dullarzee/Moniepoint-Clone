import proptype from "prop-types";

MobileNavItem.propTypes = {
    special: proptype.string,
    src: proptype.string,
    children: proptype.object,
    heading: proptype.string,
};

export default function MobileNavItem({ special, src, children, heading }) {
    const span = (
        <span className="px-1 py-0.5 bg-blue-200 rounded-full ml-1.5 text-xs text-primaryBlue">
            {special}
        </span>
    );
    return (
        <>
            <li className="flex gap-x-2 items-start pb-4">
                <img
                    alt=""
                    className="bg-blue-200 rounded-sm w-8 h-8 shrink-0"
                    src={src}
                ></img>
                <div className="">
                    <h2 className="m-0 text-[] text-white font-semibold">
                        {heading} {special && span}
                    </h2>
                    <p className="text-xs text-slate-300">{children}</p>
                </div>
            </li>
        </>
    );
}
