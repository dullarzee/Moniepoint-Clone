//import appStoreLogo from '/images/icons8-apple-logo.svg'
//import playStoreLogo from '/images/icons8-play-store.svg'
import proptype from "prop-types";

GetItOnButton.propTypes = {
    bool: proptype.string,
};
export default function GetItOnButton({ bool }) {
    return (
        <>
            <button
                className="flex items-center cursor-pointer bg-primaryBlue w-[9rem] h-[4rem] lg:w-[12rem] lg:h-[4rem] text-white justify-center 
         gap-x-2 rounded-xl"
            >
                {bool === "appStore" ? (
                    <svg
                        className="fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                        width="30px"
                        height="30px"
                    >
                        {" "}
                        <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z" />
                    </svg>
                ) : (
                    <svg
                        className="w-[2.3rem] h-[2.3rem]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        baseProfile="basic"
                    >
                        <linearGradient
                            id="jFdG-76_seIEvf-hbjSsaa"
                            x1="1688.489"
                            x2="1685.469"
                            y1="-883.003"
                            y2="-881.443"
                            gradientTransform="matrix(11.64 0 0 22.55 -19615.32 19904.924)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#047ed6" />
                            <stop offset="1" stopColor="#50e6ff" />
                        </linearGradient>
                        <path
                            fill="url(#jFdG-76_seIEvf-hbjSsaa)"
                            fillRule="evenodd"
                            d="M7.809,4.608c-0.45,0.483-0.708,1.227-0.708,2.194	v34.384c0,0.967,0.258,1.711,0.725,2.177l0.122,0.103L27.214,24.2v-0.433L7.931,4.505L7.809,4.608z"
                            clipRule="evenodd"
                        />
                        <linearGradient
                            id="jFdG-76_seIEvf-hbjSsab"
                            x1="1645.286"
                            x2="1642.929"
                            y1="-897.055"
                            y2="-897.055"
                            gradientTransform="matrix(9.145 0 0 7.7 -15001.938 6931.316)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#ffda1c" />
                            <stop offset="1" stopColor="#feb705" />
                        </linearGradient>
                        <path
                            fill="url(#jFdG-76_seIEvf-hbjSsab)"
                            fillRule="evenodd"
                            d="M33.623,30.647l-6.426-6.428v-0.45l6.428-6.428	l0.139,0.086l7.603,4.321c2.177,1.227,2.177,3.249,0,4.493l-7.603,4.321C33.762,30.561,33.623,30.647,33.623,30.647z"
                            clipRule="evenodd"
                        />
                        <linearGradient
                            id="jFdG-76_seIEvf-hbjSsac"
                            x1="1722.978"
                            x2="1720.622"
                            y1="-889.412"
                            y2="-886.355"
                            gradientTransform="matrix(15.02 0 0 11.5775 -25848.943 10324.73)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#d9414f" />
                            <stop offset="1" stopColor="#8c193f" />
                        </linearGradient>
                        <path
                            fill="url(#jFdG-76_seIEvf-hbjSsac)"
                            fillRule="evenodd"
                            d="M33.762,30.561l-6.565-6.567L7.809,43.382	c0.708,0.761,1.9,0.847,3.232,0.103L33.762,30.561"
                            clipRule="evenodd"
                        />
                        <linearGradient
                            id="jFdG-76_seIEvf-hbjSsad"
                            x1="1721.163"
                            x2="1722.215"
                            y1="-891.39"
                            y2="-890.024"
                            gradientTransform="matrix(15.02 0 0 11.5715 -25848.943 10307.886)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#33c481" />
                            <stop offset="1" stopColor="#61e3a7" />
                        </linearGradient>
                        <path
                            fill="url(#jFdG-76_seIEvf-hbjSsad)"
                            fillRule="evenodd"
                            d="M33.762,17.429L11.041,4.522	c-1.33-0.761-2.524-0.658-3.232,0.103l19.386,19.369L33.762,17.429z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
                <div>
                    <h4 className="text-sm text-left">Get it on</h4>
                    <h5 className="font-semibold">
                        {bool === "appStore" ? "App Store" : "Google Play"}
                    </h5>
                </div>
            </button>
        </>
    );
}
