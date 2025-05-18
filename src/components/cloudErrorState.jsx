import proptype from "prop-types";

CloudErrorState.propTypes = {
    errorState: proptype.string,
    setErrorState: proptype.func,
    children: proptype.object,
    src: proptype.object,
    error: proptype.object,
};

export default function CloudErrorState({ setErrorState, children, error }) {
    let src;
    if (error === "cloud") {
        src = (
            <svg
                className="w-30 fill-red-500"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
            >
                <path d="M11.364 21h-4.361c-2.205 0-4.003-1.791-4.003-4 0-1.895 1.325-3.488 3.101-3.898v0c-0.066-0.357-0.101-0.726-0.101-1.102 0-3.314 2.686-6 6-6 2.615 0 4.84 1.673 5.661 4.008 0.774-0.63 1.762-1.008 2.839-1.008 2.358 0 4.293 1.814 4.484 4.123v0c1.73 0.44 3.016 2.009 3.016 3.877 0 2.205-1.792 4-4.003 4h-4.361l-4.136-7-4.136 7zM20.227 22h3.773c2.761 0 4.999-2.244 4.999-5 0-2.096-1.287-3.892-3.117-4.634v0c-0.523-2.493-2.734-4.366-5.383-4.366-0.863 0-1.679 0.199-2.406 0.553-1.203-2.121-3.481-3.553-6.094-3.553-3.866 0-7 3.134-7 7 0 0.138 0.004 0.275 0.012 0.412v0c-1.772 0.77-3.012 2.538-3.012 4.588 0 2.761 2.232 5 4.999 5h3.773l-1.773 3h13l-1.773-3zM15.5 16l4.75 8h-9.5l4.75-8zM15 18v3h1v-3h-1zM15 22v1h1v-1h-1z"></path>
            </svg>
        );
    } else if (error === "warning") {
        src = (
            <svg
                className="w-25 fill-red-500"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
            >
                <path d="M15.788 13.105l-6-12c-0.338-0.677-1.030-1.105-1.788-1.105s-1.45 0.428-1.788 1.105l-6 12c-0.31 0.62-0.277 1.357 0.088 1.947s1.008 0.948 1.701 0.948h11.998c0.694 0 1.337-0.359 1.701-0.948s0.398-1.326 0.088-1.947zM8.999 13.5c0 0.277-0.223 0.5-0.5 0.5h-1c-0.277 0-0.5-0.223-0.5-0.5v-1c0-0.277 0.223-0.5 0.5-0.5h1c0.277 0 0.5 0.223 0.5 0.5v1zM8.999 9.5c0 0.277-0.223 0.5-0.5 0.5h-1c-0.277 0-0.5-0.223-0.5-0.5v-5c0-0.276 0.223-0.5 0.5-0.5h1c0.277 0 0.5 0.224 0.5 0.5v5z"></path>
            </svg>
        );
    }
    return (
        <>
            <section className="fixed top-30 w-[90%] md:w-[30%] md:h-[20rem] left-[5%] md:left-[35%] z-10 h-80 rounded-md bg-white">
                <div className="flex h-[50%] justify-center items-center">
                    <div className="rounded-full bg-gray-100">{src}</div>
                </div>
                <div className="flex flex-col justify-between p-3 h-[50%] pb-6">
                    <p className="text-md text-center py-2 text-slate-500 font-inter">
                        {children}
                    </p>
                    <button
                        onClick={() => setErrorState(false)}
                        className="w-full text-lg py-2 rounded-md text-white bg-primaryBlue2 hover:bg-primaryBlue"
                    >
                        Dismiss
                    </button>
                </div>
            </section>
            <div
                onClick={() => setErrorState(false)}
                className="fixed w-[100vw] top-0 h-[100vh] bg-black/50"
            ></div>
        </>
    );
}
