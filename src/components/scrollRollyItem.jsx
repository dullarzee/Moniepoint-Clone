import proptype from "prop-types";

ScrollRollyItem.propTypes = {
    children: proptype.object,
    count: proptype.number,
    heading: proptype.string,
    progress: proptype.number,
};

export default function ScrollRollyItem({
    children,
    count,
    heading,
    progress,
}) {
    let progress1 = 0;
    let progress2 = 0;
    let progress3 = 0;
    let progress4 = 0;

    if (count === 1 && progress <= 25) {
        progress1 = progress * 4;
        //console.log("this is the first div");
    } else if (count === 2 && progress <= 50 && progress > 25) {
        progress2 = (progress - 25) * 4;
        //console.log("this is the second div");
    } else if (count === 3 && progress <= 75 && progress > 50) {
        progress3 = (progress - 50) * 4;
    } else if (count === 4 && progress <= 100 && progress > 75) {
        progress4 = (progress - 75) * 4;
    }

    if (progress >= 25) progress1 = 100;
    if (progress >= 50) progress2 = 100;
    if (progress >= 75) progress3 = 100;
    if (progress >= 100) progress4 = 100;

    return (
        <>
            <div className="bg-slate-50 h-[20rem] w-[28rem]">
                <div className="flex flex-col">
                    <div className="flex items-center mb-[2.5rem]">
                        {count === 1 && (
                            <div
                                className="flex items-center justify-center text-2xl text-slate-600 w-[4.5rem] h-[4.5rem] 
                    font-semibold rounded-full bg-white shrink-0"
                                style={{
                                    border: `3px solid rgba(4, 86, 240, ${progress1}%)`,
                                }}
                            >
                                {count}
                            </div>
                        )}
                        {count === 2 && (
                            <div
                                className="flex items-center justify-center text-2xl text-slate-600 w-[4.5rem] h-[4.5rem] 
                    font-semibold rounded-full bg-white shrink-0"
                                style={{
                                    border: `3px solid rgba(4, 86, 240, ${progress2}%)`,
                                }}
                            >
                                {count}
                            </div>
                        )}
                        {count === 3 && (
                            <div
                                className="flex items-center justify-center text-2xl text-slate-600 w-[4.5rem] h-[4.5rem] 
                    font-semibold rounded-full bg-white shrink-0"
                                style={{
                                    border: `3px solid rgba(4, 86, 240, ${progress3}%)`,
                                }}
                            >
                                {count}
                            </div>
                        )}
                        {count === 4 && (
                            <div
                                className="flex items-center justify-center text-2xl text-slate-600 w-[4.5rem] h-[4.5rem] 
                    font-semibold rounded-full bg-white shrink-0"
                                style={{
                                    border: `3px solid rgba(4, 86, 240, ${progress4}%)`,
                                }}
                            >
                                {count}
                            </div>
                        )}
                        {count === 1 && (
                            <div className="bg-slate-200 w-[400%] z-50">
                                <div
                                    className="h-1 bg-primaryBlue2"
                                    style={{ width: `${progress1}%` }}
                                ></div>
                            </div>
                        )}
                        {count === 2 && (
                            <div className="bg-slate-200 w-[400%] z-50">
                                <div
                                    className="h-1 bg-primaryBlue2"
                                    style={{ width: `${progress2}%` }}
                                ></div>
                            </div>
                        )}
                        {count === 3 && (
                            <div className="bg-slate-200 w-[400%] z-50">
                                <div
                                    className="h-1 bg-primaryBlue2"
                                    style={{ width: `${progress3}%` }}
                                ></div>
                            </div>
                        )}
                        {count === 4 && (
                            <div className="bg-slate-200 w-[400%] z-50">
                                <div
                                    className="h-1 bg-primaryBlue2"
                                    style={{ width: `${progress4}%` }}
                                ></div>
                            </div>
                        )}
                    </div>
                    <div>
                        <h2 className="text-2xl text-blue-950 font-semibold w-[85%]">
                            {heading}
                        </h2>
                        <p className="text-blue-950 w-[85%]">{children}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
