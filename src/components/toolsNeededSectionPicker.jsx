import proptype from "prop-types";
import { useEffect } from "react";

ToolsNeededSectionPicker.propTypes = {
    pick: proptype.number,
    setPick: proptype.func,
    track: proptype.number,
    one: proptype.object,
    two: proptype.object,
    three: proptype.object,
    four: proptype.object,
};
export default function ToolsNeededSectionPicker({
    pick,
    setPick,
    one,
    two,
    three,
    four,
}) {
    /*  useEffect(() => {
        if (pick === 1) {
            one.current.scrollIntoView({
                block: "center",
                behaviour: "smooth",
            });
        } else if (pick === 2) {
            two.current.scrollIntoView({ block: "center" });
        }
    });*/

    const handleClick1 = () => {
        one.current.scrollIntoView({
            block: "center",
            behaviour: "smooth",
        });
        //setPick(1);
    };
    const handleClick2 = () => {
        two.current.scrollIntoView({ block: "center" });
        //setPick(2);
    };
    const handleClick3 = () => {
        //setPick(3);
    };
    const handleClick4 = () => {
        //setPick(4);
    };
    return (
        <>
            <div className="hidden lg:block w-[70%] h-[7rem] bg-white mx-auto rounded-3xl">
                <div className="flex justify-evenly items-center h-full text-blue-950 text-lg">
                    <span
                        id={1}
                        onClick={handleClick1}
                        className={`cursor-pointer ${
                            pick === 1
                                ? "px-[1rem] py-[0.4rem] text-semibold bg-blue-200 rounded-full"
                                : "text-gray-400"
                        }`}
                    >
                        Business Account
                    </span>
                    <span
                        id={2}
                        onClick={handleClick2}
                        className={`cursor-pointer ${
                            pick === 2
                                ? "px-[1rem] py-[0.4rem] text-semibold bg-blue-200 rounded-full"
                                : "text-gray-400"
                        }`}
                    >
                        Point of Sale Terminal
                    </span>
                    <span
                        id={3}
                        onClick={handleClick3}
                        className={`cursor-pointer ${
                            pick === 3
                                ? "px-[1rem] py-[0.4rem] text-semibold bg-blue-200 rounded-full"
                                : "text-gray-400"
                        }`}
                    >
                        Expense Card
                    </span>
                    <span
                        id={4}
                        onClick={handleClick4}
                        className={`cursor-pointer ${
                            pick === 4
                                ? "px-[1rem] py-[0.4rem] text-semibold bg-blue-200 rounded-full"
                                : "text-gray-400"
                        }`}
                    >
                        Working Capital Loans
                    </span>
                </div>
            </div>
        </>
    );
}
